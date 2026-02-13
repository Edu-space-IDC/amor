import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Play, Pause, Music, ChevronDown, ChevronUp } from "lucide-react";

export function BackgroundMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7); // Default 70%
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 🔥 Intentar reproducir automáticamente
  useEffect(() => {
    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Si el navegador bloquea autoplay,
            // reproducir en el primer click del usuario
            const resumeOnInteraction = () => {
              audioRef.current?.play();
              setIsPlaying(true);
              window.removeEventListener("click", resumeOnInteraction);
            };
            window.addEventListener("click", resumeOnInteraction);
          });
      }
    };


    attemptPlay();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setHasError(true));
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
  };

  const handleAudioError = () => {
    setHasError(true);
    setIsPlaying(false);
    console.error("No se pudo cargar el archivo de música. Asegúrate de tener el archivo en: /public/assets/background-music.mp3");
  };

  // Mostrar un mensaje temporal si hay error
  if (hasError) {
    return (
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, type: "spring", bounce: 0.4 }}
        className="fixed top-4 right-4 z-50"
      >
        <div className="bg-red-500/90 backdrop-blur-xl rounded-2xl border-2 border-white/30 px-5 py-4 shadow-2xl max-w-sm">
          <p className="text-white font-medium mb-2">⚠️ Archivo de música no encontrado</p>
          <p className="text-white/90 text-sm mb-2">
            Agrega tu archivo MP3 en:
          </p>
          <code className="bg-black/40 text-white px-3 py-2 rounded-lg text-xs block mb-2">
            /public/assets/background-music.mp3
          </code>
          <p className="text-white/70 text-xs">
            Lee las instrucciones en: <strong>COMO-AGREGAR-MUSICA.md</strong>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="src/assets/background-music.mp3"
        loop
        onError={handleAudioError}
      />

      {/* Floating music controller */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, type: "spring", bounce: 0.4 }}
        className="fixed top-4 right-4 z-50"
        style={{ touchAction: 'none' }}
      >
        <motion.div
          className="relative"
          animate={{
            filter: isPlaying
              ? [
                "drop-shadow(0 8px 30px rgba(236, 72, 153, 0.4))",
                "drop-shadow(0 12px 40px rgba(168, 85, 247, 0.6))",
                "drop-shadow(0 8px 30px rgba(236, 72, 153, 0.4))",
              ]
              : "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3))",
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main Card */}
          <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-2xl border-2 border-white/30 overflow-hidden backdrop-blur-xl">
            {/* Collapsed View */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full px-5 py-4 flex items-center gap-3 active:scale-95 transition-transform"
              whileTap={{ scale: 0.95 }}
            >
              {/* Music icon with animation */}
              <div className="relative">
                <motion.div
                  animate={isPlaying ? {
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <Music className="w-6 h-6 text-white" />
                </motion.div>

                {/* Playing indicator dots */}
                {isPlaying && !isMuted && (
                  <div className="absolute -top-1 -right-1 flex gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-3 bg-green-400 rounded-full"
                        animate={{
                          height: [8, 16, 8],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <p className="text-white text-sm">Música de fondo</p>
                <p className="text-white/70 text-xs">
                  {isPlaying ? (isMuted ? "Silenciado" : "Reproduciendo ♫") : "En pausa"}
                </p>
              </div>

              {/* Expand icon */}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-white/80" />
              </motion.div>
            </motion.button>

            {/* Expanded Controls */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden border-t border-white/20"
                >
                  <div className="px-5 py-4 space-y-4">
                    {/* Play/Pause and Mute buttons */}
                    <div className="flex items-center gap-3">
                      {/* Play/Pause Button */}
                      <motion.button
                        onClick={togglePlay}
                        className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center justify-center gap-2 active:scale-95 transition-all"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-5 h-5 text-white fill-white" />
                            <span className="text-white text-sm font-medium">Pausar</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5 text-white fill-white" />
                            <span className="text-white text-sm font-medium">Reproducir</span>
                          </>
                        )}
                      </motion.button>

                      {/* Mute Button */}
                      <motion.button
                        onClick={toggleMute}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-3 active:scale-95 transition-all"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {isMuted ? (
                          <VolumeX className="w-6 h-6 text-white" />
                        ) : (
                          <Volume2 className="w-6 h-6 text-white" />
                        )}
                      </motion.button>
                    </div>

                    {/* Volume Control */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-xs font-medium">Volumen</span>
                        <span className="text-white text-xs font-bold">
                          {Math.round(volume * 100)}%
                        </span>
                      </div>

                      {/* Custom Volume Slider */}
                      <div className="relative h-10 flex items-center">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="volume-slider w-full h-2 appearance-none bg-white/20 rounded-full outline-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, 
                              rgba(255, 255, 255, 0.8) 0%, 
                              rgba(255, 255, 255, 0.8) ${volume * 100}%, 
                              rgba(255, 255, 255, 0.2) ${volume * 100}%, 
                              rgba(255, 255, 255, 0.2) 100%)`
                          }}
                        />
                      </div>

                      {/* Volume indicators */}
                      <div className="flex justify-between px-1">
                        <VolumeX className="w-3 h-3 text-white/50" />
                        <Volume2 className="w-4 h-4 text-white/50" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Animated waves when playing */}
          {isPlaying && !isMuted && (
            <div className="absolute -inset-3 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-3xl border-2 border-pink-400/20"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{
                    scale: [1, 1.3, 1.6],
                    opacity: [0.6, 0.3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Custom CSS for volume slider */}
      <style>{`
        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, #fce7f3 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }

        .volume-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.5);
        }

        .volume-slider::-webkit-slider-thumb:active {
          transform: scale(1.1);
        }

        .volume-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, #fce7f3 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }

        .volume-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.5);
        }

        .volume-slider::-moz-range-thumb:active {
          transform: scale(1.1);
        }

        /* Touch-friendly sizing for mobile */
        @media (hover: none) and (pointer: coarse) {
          .volume-slider::-webkit-slider-thumb {
            width: 24px;
            height: 24px;
          }
          
          .volume-slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </>
  );
}