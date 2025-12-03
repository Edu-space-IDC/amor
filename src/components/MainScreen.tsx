import { motion } from "motion/react";
import { useState } from "react";
import { Music, BookOpen, Camera, Heart } from "lucide-react";
import { SongsSection } from "./SongsSection";
import { PoemsSection } from "./PoemsSection";
import { AlbumSection } from "./AlbumSection";

type Tab = "songs" | "poems" | "album";

export function MainScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("songs");

  const tabs = [
    { id: "songs" as Tab, label: "Canciones", icon: Music },
    { id: "poems" as Tab, label: "Poemas", icon: BookOpen },
    { id: "album" as Tab, label: "Nuestro Álbum", icon: Camera },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40"
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
              <h1 className="text-pink-600">Para Ti, Mi Amor</h1>
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
            </div>
            <p className="text-gray-600">Un lugar especial lleno de amor</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <div className="flex gap-2 justify-center flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "songs" && <SongsSection />}
          {activeTab === "poems" && <PoemsSection />}
          {activeTab === "album" && <AlbumSection />}
        </motion.div>
      </main>

      {/* Floating hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              x: (i * window.innerWidth) / 8,
              opacity: 0.1,
            }}
            animate={{
              y: "-10vh",
              x: (i * window.innerWidth) / 8 + Math.sin(i) * 50,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            className="absolute text-2xl"
          >
            💕
          </motion.div>
        ))}
      </div>
    </div>
  );
}
