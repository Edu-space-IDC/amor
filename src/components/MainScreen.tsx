import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Music, BookOpen, Camera, Heart, Sparkles, Star } from "lucide-react";
import { SongsSection } from "./SongsSection";
import { PoemsSection } from "./PoemsSection";
import { AlbumSection } from "./AlbumSection";

type Tab = "songs" | "poems" | "album";

export function MainScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("songs");

  const tabs = [
    { id: "songs" as Tab, label: "Canciones", icon: Music, gradient: "from-pink-500 via-rose-500 to-pink-600" },
    { id: "poems" as Tab, label: "Poemas", icon: BookOpen, gradient: "from-purple-500 via-violet-500 to-purple-600" },
    { id: "album" as Tab, label: "Nuestro Álbum", icon: Camera, gradient: "from-blue-500 via-indigo-500 to-blue-600" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Multi-layer animated background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [-200, -100, -200],
            y: [-200, -100, -200],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [100, 200, 100],
            y: [100, 200, 100],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [-300, 300, -300],
            y: [-200, 200, -200],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ec4899' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header with glass effect */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="sticky top-0 z-40 backdrop-blur-2xl bg-white/60 border-b border-white/40 shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Title section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              {/* Left decorative stars */}
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`left-${i}`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
                  </motion.div>
                ))}
              </div>

              {/* Animated heart */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-12 h-12 text-pink-500 fill-pink-500 drop-shadow-lg" />
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-5xl font-bold text-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ 
                  backgroundSize: "200% auto",
                  backgroundImage: "linear-gradient(135deg, #ff6b9d 0%, #c86dd7 25%, #8e54e9 50%, #c86dd7 75%, #ff6b9d 100%)"
                }}
              >
                Para Ti, Mi Amor
              </motion.h1>

              {/* Animated sparkle */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Sparkles className="w-12 h-12 text-purple-500 fill-purple-400 drop-shadow-lg" />
              </motion.div>

              {/* Right decorative stars */}
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`right-${i}`}
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-4 h-4 fill-purple-400 text-purple-400" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p 
              className="text-lg text-gray-600 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Un lugar especial lleno de amor 💕
            </motion.p>
          </div>

          {/* Enhanced tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 justify-center flex-wrap">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`group relative flex items-center gap-3 px-10 py-5 rounded-2xl transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "text-white shadow-2xl scale-105"
                        : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105"
                    }`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active background with animated gradient */}
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${tab.gradient}`}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                        
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-200%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        />

                        {/* Glow effect */}
                        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 -z-10" />
                      </>
                    )}

                    {/* Icon */}
                    <motion.div
                      animate={isActive ? { 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className={`w-6 h-6 relative z-10 ${isActive ? 'drop-shadow-lg' : ''}`} />
                    </motion.div>

                    {/* Label */}
                    <span className="relative z-10 font-semibold text-lg">{tab.label}</span>

                    {/* Inactive hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content with smooth transitions */}
      <main className="max-w-7xl mx-auto px-6 py-12 pb-24 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            {activeTab === "songs" && <SongsSection />}
            {activeTab === "poems" && <PoemsSection />}
            {activeTab === "album" && <AlbumSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating romantic elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "120vh",
              x: `${Math.random() * 100}vw`,
              opacity: 0,
              rotate: 0,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: "-20vh",
              x: `${Math.random() * 100}vw`,
              opacity: [0, 0.3, 0.3, 0],
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            className="absolute text-3xl"
          >
            {i % 4 === 0 ? "💕" : i % 4 === 1 ? "✨" : i % 4 === 2 ? "💖" : "🌸"}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
