import { motion } from "motion/react";
import { Play, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current && !audioError) {
      audioRef.current.play().catch(() => {
        setAudioError(true);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const handleAudioError = () => {
    setAudioError(true);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* Avatar */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center shadow-2xl border-4 border-white">
            {/* Placeholder para tu foto - Reemplaza /avatar.jpg con tu foto */}
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden text-6xl">💕</div>
          </div>
        </motion.div>

        {/* Botón de reproducir audio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          {!audioError ? (
            <>
              <button
                onClick={handlePlayAudio}
                disabled={isPlaying}
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlaying ? (
                  <>
                    <Volume2 className="w-5 h-5 animate-pulse" />
                    Reproduciendo...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Escucha mi mensaje
                  </>
                )}
              </button>
              <audio
                ref={audioRef}
                src="/welcome-audio.mp3"
                onEnded={handleAudioEnded}
                onError={handleAudioError}
              />
            </>
          ) : (
            <p className="text-gray-500 text-sm italic">
              (Agrega el audio welcome-audio.mp3 para activar esta función)
            </p>
          )}
        </motion.div>

        {/* Mensaje de texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-8 space-y-4"
        >
          <p className="text-gray-700 text-lg">
            Hola mi amor, te hice esto para demostrarte cuánto te amo,
          </p>
          <p className="text-gray-700 text-lg">
            así que, continuemos...
          </p>
        </motion.div>

        {/* Botón de iniciar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-gray-600 mb-4">
            Adelante, toca el botón de iniciar
          </p>
          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-pink-300 transition-all hover:scale-110 transform"
          >
            <Play className="w-6 h-6" />
            Iniciar
          </button>
        </motion.div>

        {/* Corazones flotantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
              animate={{
                y: "-20vh",
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 2,
              }}
              className="absolute text-4xl opacity-30"
            >
              ❤️
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}