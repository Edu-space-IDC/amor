import { Music, Download, Play, Pause, Plus, Disc3, Heart, Waves } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDevMode } from "../hooks/useDevMode";
import { AddSongModal } from "./AddSongModal";
import miCancion1 from "../assets/1.mp3";
import miCancion2 from "../assets/2.mp3";
import miCancion3 from "../assets/3 (1).mp4";
import miCancion4 from "../assets/3 (2).mp4";
import miCancion5 from "../assets/3 (3).mp4";
import miCancion6 from "../assets/3 (4).mp4";
import miCancion7 from "../assets/3 (5).mp4";
import miCancion8 from "../assets/3 (8).mp4";

interface Song {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  date: string;
}

export function SongsSection() {
  const isDevMode = useDevMode();
  const [showModal, setShowModal] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [audioErrors, setAudioErrors] = useState<Set<number>>(new Set());
  const [customSongs, setCustomSongs] = useState<Song[]>([]);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  // Load custom songs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customSongs");
    if (saved) {
      setCustomSongs(JSON.parse(saved));
    }
  }, []);

  // Default songs
  const defaultSongs: Song[] = [
    {
    id: 1,
    title: "No Hay Nadie Mas",
    description: "Una melodía que escribí pensando en ti",
    audioUrl: miCancion2, // Cambia esto por: miCancion1 (tu import)
    date: "2024-11-15"
  },
  {
    id: 2,
    title: "A tu lado yo estare",
    description: "Dedicada a todos nuestros momentos juntos",
    audioUrl: miCancion1, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  },
  {
    id: 3,
    title: "Si supieras",
    description: "Ojala supieras cuanto te amooooooo",
    audioUrl: miCancion6, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  },
  {
    id: 4,
    title: "Poema 1",
    description: "Mi corazon hablandote",
    audioUrl: miCancion3, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  },
  {
    id: 5,
    title: "Poema 2",
    description: "Mi corazon hablandote nuevamente",
    audioUrl: miCancion4, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  },
  {
    id: 6,
    title: "Poema 3",
    description: "no se como mostrarte mi amor",
    audioUrl: miCancion8, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  },
  {
    id: 7,
    title: "Intrumental para ti",
    description: "Ahora el piano te habla",
    audioUrl: miCancion5, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  },
  {
    id: 8,
    title: "Intrumental para ti parte 2",
    description: "Ahora el piano te habla, nuevamente",
    audioUrl: miCancion7, // Cambia esto por: miCancion2 (tu import)
    date: "2024-11-28"
  }

  ];


  // Combine default and custom songs
  const songsData = [...defaultSongs, ...customSongs];

  const handleSaveSong = (newSong: { title: string; description: string; audioUrl: string; date: string }) => {
    const id = Math.max(...songsData.map(s => s.id), 0) + 1;
    const song: Song = { id, ...newSong };
    
    const updated = [...customSongs, song];
    setCustomSongs(updated);
    localStorage.setItem("customSongs", JSON.stringify(updated));
  };

  const handlePlayPause = (id: number) => {
    if (audioErrors.has(id)) {
      return;
    }
    
    if (currentPlaying === id) {
      audioRefs.current[id]?.pause();
      setCurrentPlaying(null);
    } else {
      if (currentPlaying !== null) {
        audioRefs.current[currentPlaying]?.pause();
      }
      audioRefs.current[id]?.play().catch(() => {
        setAudioErrors(prev => new Set(prev).add(id));
        setCurrentPlaying(null);
      });
      setCurrentPlaying(id);
    }
  };

  const handleAudioError = (id: number) => {
    setAudioErrors(prev => new Set(prev).add(id));
    if (currentPlaying === id) {
      setCurrentPlaying(null);
    }
  };

  const handleDownload = (audioUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        {/* Icon with animation */}
        <motion.div
          className="relative inline-block mb-6"
          animate={{ 
            rotate: [0, 3, -3, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-400 to-rose-400 opacity-40 scale-150" />
          
          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 p-6 rounded-3xl shadow-2xl">
            <Music className="w-16 h-16 text-white relative z-10" />
            
            {/* Orbiting disc */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ 
                rotate: 360
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="bg-white rounded-full p-2 shadow-lg">
                <Disc3 className="w-7 h-7 text-rose-500" />
              </div>
            </motion.div>

            {/* Floating hearts */}
            {[...Array(3)].map((_, i) => {
              const angle = (i * 120) * Math.PI / 180;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${50 + 60 * Math.cos(angle)}%`,
                    left: `${50 + 60 * Math.sin(angle)}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 fill-pink-300 text-pink-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="text-4xl font-bold mb-4 text-gradient"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mis Canciones Para Ti
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cada canción es una parte de mi corazón que late por ti 💕
        </motion.p>

        {/* Add button for dev mode */}
        {isDevMode && (
          <motion.button
            onClick={() => setShowModal(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl overflow-hidden shadow-xl transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600" />
            
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />

            <Plus className="w-6 h-6 text-white relative z-10" />
            <span className="text-white font-semibold relative z-10">Agregar Canción</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl blur-xl bg-pink-500/50 -z-10" />
          </motion.button>
        )}
      </motion.div>

      {/* Songs Grid */}
      <div className="grid gap-6 max-w-4xl mx-auto">
        <AnimatePresence mode="popLayout">
          {songsData.map((song, index) => {
            const isPlaying = currentPlaying === song.id;
            const hasError = audioErrors.has(song.id);

            return (
              <motion.div
                key={song.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  layout: { type: "spring", bounce: 0.2 }
                }}
                className="group relative"
              >
                {/* Card */}
                <motion.div
                  className="relative glass-card rounded-3xl p-7 shadow-xl border-2 border-white/20 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Playing wave effect */}
                  {isPlaying && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/20 to-pink-500/10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  )}

                  {/* Border glow when playing */}
                  {isPlaying && (
                    <div className="absolute inset-0 rounded-3xl blur-xl bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-pink-600/30 -z-10 pulse-glow" />
                  )}

                  <div className="flex items-center gap-6 relative z-10">
                    {/* Play button */}
                    <motion.button
                      onClick={() => handlePlayPause(song.id)}
                      disabled={hasError}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all ${
                        hasError ? 'opacity-40 cursor-not-allowed' : ''
                      }`}
                      whileHover={!hasError ? { scale: 1.1, rotate: 5 } : {}}
                      whileTap={!hasError ? { scale: 0.95 } : {}}
                    >
                      {/* Button background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600" />
                      
                      {/* Rotating border when playing */}
                      {isPlaying && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "linear-gradient(45deg, #ff6b9d, #c86dd7, #ff6b9d)",
                            backgroundSize: "200% 200%"
                          }}
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600" />
                        </motion.div>
                      )}

                      {/* Icon */}
                      <div className="relative z-10">
                        {isPlaying ? (
                          <Pause className="w-8 h-8" />
                        ) : (
                          <Play className="w-8 h-8 ml-1" />
                        )}
                      </div>

                      {/* Pulse waves when playing */}
                      {isPlaying && (
                        <div className="absolute inset-0 -z-10">
                          {[...Array(2)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute inset-0 rounded-2xl border-2 border-pink-400/30"
                              initial={{ scale: 1, opacity: 0.5 }}
                              animate={{
                                scale: [1, 1.4],
                                opacity: [0.5, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.75,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.button>

                    {/* Song info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-800 truncate mb-2 group-hover:text-pink-600 transition-colors">
                        {song.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {song.description}
                      </p>
                      
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-sm text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                          <span>📅</span>
                          <span>{song.date}</span>
                        </span>
                        
                        {isPlaying && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full font-medium shadow-lg"
                          >
                            <Waves className="w-4 h-4" />
                            Reproduciendo
                          </motion.span>
                        )}
                      </div>

                      {hasError && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-orange-600 text-sm mt-2 flex items-center gap-1"
                        >
                          <span>⚠️</span>
                          Audio no disponible
                        </motion.p>
                      )}
                    </div>

                    {/* Download button */}
                    <motion.button
                      onClick={() => handleDownload(song.audioUrl, song.title)}
                      className="flex-shrink-0 group/btn relative p-5 rounded-2xl glass-card hover:glass-card-hover text-pink-500 shadow-lg transition-all"
                      title="Descargar canción"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-6 h-6 relative z-10" />
                      
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 to-rose-500/0 group-hover/btn:from-pink-500/20 group-hover/btn:to-rose-500/20 transition-all" />
                    </motion.button>
                  </div>

                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[song.id] = el;
                    }}
                    src={song.audioUrl}
                    onEnded={() => setCurrentPlaying(null)}
                    onError={() => handleAudioError(song.id)}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {songsData.length === 0 && (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-2xl bg-pink-200 opacity-50" />
            <Music className="w-24 h-24 mx-auto text-pink-300 relative" />
          </div>
          <p className="text-gray-400 text-lg">Aún no hay canciones. ¡Pronto agregaré más!</p>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <AddSongModal
            onClose={() => setShowModal(false)}
            onSave={handleSaveSong}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
