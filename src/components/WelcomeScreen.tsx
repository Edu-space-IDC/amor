import { motion } from "motion/react";
import { Play, Volume2, Sparkles, Heart, Star } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Multi-layer animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)",
              "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)",
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.83zM27.03 0L17.03 10 18.444 11.414l11-11h-2.83zm5.657 0L23.03 9.657 24.444 11.07l11.314-11.314h-2.83zm5.657 0L28.686 9.657 30.1 11.07 41.415 0h-2.83z' fill='%23ec4899' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "100vh", 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              rotate: 0,
              scale: 0.5 + Math.random() * 0.8
            }}
            animate={{
              y: "-20vh",
              rotate: 360,
              opacity: [0, 0.6, 0.8, 0.6, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute"
            style={{ fontSize: `${20 + Math.random() * 40}px` }}
          >
            {i % 4 === 0 ? "❤️" : i % 4 === 1 ? "💕" : i % 4 === 2 ? "✨" : "💝"}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="text-center max-w-3xl relative z-10 px-6"
      >
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 flex justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Avatar with advanced effects */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12 relative"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 -m-8"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 blur-2xl opacity-50" />
          </motion.div>

          {/* Avatar container */}
          <motion.div 
            className="w-52 h-52 mx-auto relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Rotating gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(45deg, #ff6b9d, #c86dd7, #8e54e9, #4facfe, #ff6b9d)",
                backgroundSize: "300% 300%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-1 rounded-full bg-white" />
            </motion.div>

            {/* Avatar image */}
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/avatar.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 flex items-center justify-center text-7xl">
                💕
              </div>
            </div>

            {/* Floating sparkles */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${50 + 55 * Math.cos(angle)}%`,
                    left: `${50 + 55 * Math.sin(angle)}%`,
                  }}
                  animate={{
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Title with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl font-bold mb-4 text-gradient leading-tight"
        >
          Hola Mi Amor
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl text-gray-700 mb-10 leading-relaxed"
        >
          Te hice esto para demostrarte cuánto te amo ❤️
        </motion.p>

        {/* Audio button or message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-10"
        >
          {!audioError ? (
            <motion.button
              onClick={handlePlayAudio}
              disabled={isPlaying}
              className="group relative px-10 py-4 rounded-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 transition-transform group-hover:scale-110" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />

              {/* Button content */}
              <span className="relative flex items-center gap-3 text-white font-medium">
                {isPlaying ? (
                  <>
                    <Volume2 className="w-6 h-6 animate-pulse" />
                    Escuchando mensaje...
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 fill-white" />
                    Escuchar mi mensaje
                  </>
                )}
              </span>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl blur-xl bg-pink-500/50 -z-10 group-hover:bg-pink-500/70 transition-all" />
            </motion.button>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 italic"
            >
              Mensaje de voz no disponible
            </motion.p>
          )}

          <audio
            ref={audioRef}
            src="/audio-message.mp3"
            onEnded={handleAudioEnded}
            onError={handleAudioError}
          />
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={onStart}
            className="group relative px-12 py-5 rounded-2xl overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600" />
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ["0% 0%", "200% 200%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Button text */}
            <span className="relative flex items-center gap-3 text-white text-lg font-semibold">
              Continuar
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 fill-white" />
              </motion.div>
            </span>

            {/* Multiple glow layers */}
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-pink-600/40 -z-10" />
            <div className="absolute inset-0 rounded-2xl blur-3xl bg-purple-600/30 -z-20 group-hover:bg-purple-600/50 transition-all" />
          </motion.button>
        </motion.div>

        {/* Decorative bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex justify-center gap-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
