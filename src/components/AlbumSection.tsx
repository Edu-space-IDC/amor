import { Camera, Heart, Plus, Image as ImageIcon, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useDevMode } from "../hooks/useDevMode";
import { AddPhotoModal } from "./AddPhotoModal";
import photo1 from "../assets/bely5.jpg";
import photo3 from "../assets/b1.jpg";
import photo4 from "../assets/bely2.jpg";
import photo5 from "../assets/she and i.jpg";
import photo6 from "../assets/baly3.jpg";
import photo7 from "../assets/baly4.jpg";
import photo8 from "../assets/bely6.jpg";
import photo9 from "../assets/bely7.jpg";
import photo10 from "../assets/bely8.jpg";
import photo11 from "../assets/bely9.jpg";

interface Photo {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}

export function AlbumSection() {
  const isDevMode = useDevMode();
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Photo[]>([]);
  
  // Load custom photos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customPhotos");
    if (saved) {
      setCustomPhotos(JSON.parse(saved));
    }
  }, []);

  // Default photos
  const defaultPhotos: Photo[] = [
    { id: 1, imageUrl: photo1, caption: "Momentos especiales juntos ❤️", date: "2025-12-31" },
    { id: 2, imageUrl: photo3, caption: "Mi princesa", date: "2025-12-01" },
    { id: 3, imageUrl: photo4, caption: "Eres perfecta tal y como eres", date: "2025-12-02" },
    { id: 4, imageUrl: photo5, caption: "AMO TUS OJOOOOOOS", date: "2024-03-20" },
    { id: 5, imageUrl: photo6, caption: "¿Ahora si crees que te amo mas?", date: "2026-02-02" },
    { id: 6, imageUrl: photo7, caption: "Tu..Eres..Mi...Vida", date: "2024-03-20" },
    { id: 7, imageUrl: photo8, caption: "¿Sabias que yo te amo mas?", date: "2025-11-20" },
    { id: 8, imageUrl: photo9, caption: "Mis ojitos lindos", date: "2024-03-20" },
    { id: 9, imageUrl: photo10, caption: "ES QUE MIRATE", date: "2024-03-20" },
    { id: 10, imageUrl: photo11, caption: "Mi princesa", date: "2024-03-20" }
  ];

  // Combine default and custom photos
  const photosData = [...defaultPhotos, ...customPhotos];

  const handleSavePhoto = (newPhoto: { imageUrl: string; caption: string; date: string }) => {
    const id = Math.max(...photosData.map(p => p.id), 0) + 1;
    const photo: Photo = { id, ...newPhoto };
    
    const updated = [...customPhotos, photo];
    setCustomPhotos(updated);
    localStorage.setItem("customPhotos", JSON.stringify(updated));
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
          style={{ perspective: 1000 }}
          animate={{ 
            rotateY: [0, 10, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-40 scale-150" />
          
          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6 rounded-3xl shadow-2xl">
            <Camera className="w-16 h-16 text-white relative z-10" />
            
            {/* Floating image icon */}
            <motion.div
              className="absolute -bottom-2 -right-2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -15, 15, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-full p-2 shadow-lg">
                <ImageIcon className="w-7 h-7 text-blue-500" />
              </div>
            </motion.div>

            {/* Floating hearts */}
            {[...Array(4)].map((_, i) => {
              const angle = (i * 90 + 45) * Math.PI / 180;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${50 + 65 * Math.cos(angle)}%`,
                    left: `${50 + 65 * Math.sin(angle)}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [0.9, 1.3, 0.9],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 fill-blue-300 text-blue-300" />
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
          Nuestro Álbum
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Momentos especiales que guardamos juntos 📸
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />
            
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />

            <Plus className="w-6 h-6 text-white relative z-10" />
            <span className="text-white font-semibold relative z-10">Agregar Foto</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl blur-xl bg-blue-500/50 -z-10" />
          </motion.button>
        )}
      </motion.div>

      {/* Photos Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {photosData.map((photo, index) => {
            // Random rotation for polaroid effect
            const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1);

            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.7, rotateZ: rotation * 3 }}
                animate={{ opacity: 1, scale: 1, rotateZ: rotation }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.4
                }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedPhoto(photo.id)}
                whileHover={{ 
                  scale: 1.05, 
                  rotateZ: 0,
                  zIndex: 10,
                  y: -12
                }}
              >
                {/* Polaroid card */}
                <div className="bg-white p-4 pb-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Photo container */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                    <img
                      src={photo.imageUrl}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-center"
                      >
                        <p className="text-white font-medium text-sm leading-snug mb-2">{photo.caption}</p>
                        <p className="text-white/80 text-xs">{photo.date}</p>
                      </motion.div>
                    </div>

                    {/* Corner sparkle */}
                    <motion.div
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  {/* Caption (polaroid style) */}
                  <div className="mt-3 text-center">
                    <p className="text-gray-700 text-sm font-handwriting italic truncate px-2">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Tape effect at top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 backdrop-blur-sm border-2 border-white/80 rounded-sm shadow-sm rotate-0 opacity-70" />
                </div>

                {/* Floating heart on hover */}
                <motion.div
                  className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-3 shadow-2xl">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                </motion.div>

                {/* Shadow glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl -z-10 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {photosData.length === 0 && (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-2xl bg-blue-200 opacity-50" />
            <Camera className="w-24 h-24 mx-auto text-blue-300 relative" />
          </div>
          <p className="text-gray-400 text-lg">Aún no hay fotos. ¡Pronto agregaré nuestros recuerdos!</p>
        </motion.div>
      )}

      {/* Full screen photo modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.7, y: 100, rotateX: -20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.7, y: 100, rotateX: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: 2000 }}
            >
              {photosData
                .filter((p) => p.id === selectedPhoto)
                .map((photo) => (
                  <div key={photo.id} className="relative">
                    {/* Photo frame */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl">
                      {/* Image */}
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                        <img
                          src={photo.imageUrl}
                          alt={photo.caption}
                          className="w-full h-auto max-h-[70vh] object-contain"
                        />
                      </div>

                      {/* Caption section */}
                      <div className="mt-6 text-center space-y-3">
                        <div className="flex items-center justify-center gap-3">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
                          </motion.div>
                          <p className="text-gray-800 text-xl font-medium">{photo.caption}</p>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          >
                            <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
                          </motion.div>
                        </div>
                        <p className="text-gray-500 text-base flex items-center justify-center gap-2">
                          <span>📅</span>
                          <span>{photo.date}</span>
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-50 animate-pulse" />
                  </div>
                ))}
            
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white text-xl font-bold"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-7 h-7" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add photo modal */}
      <AnimatePresence>
        {showModal && (
          <AddPhotoModal
            onClose={() => setShowModal(false)}
            onSave={handleSavePhoto}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
import { Camera, Heart, Plus, Image as ImageIcon, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useDevMode } from "../hooks/useDevMode";
import { AddPhotoModal } from "./AddPhotoModal";
import photo1 from "../assets/bely5.jpg";
import photo3 from "../assets/b1.jpg";
import photo4 from "../assets/bely2.jpg";
import photo5 from "../assets/she and i.jpg";
import photo6 from "../assets/baly3.jpg";
import photo7 from "../assets/baly4.jpg";
import photo8 from "../assets/bely6.jpg";
import photo9 from "../assets/bely7.jpg";
import photo10 from "../assets/bely8.jpg";
import photo11 from "../assets/bely9.jpg";

interface Photo {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}

export function AlbumSection() {
  const isDevMode = useDevMode();
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Photo[]>([]);
  
  // Load custom photos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customPhotos");
    if (saved) {
      setCustomPhotos(JSON.parse(saved));
    }
  }, []);

  // Default photos
  const defaultPhotos: Photo[] = [
    { id: 1, imageUrl: photo1, caption: "Momentos especiales juntos ❤️", date: "2025-12-31" },
    { id: 2, imageUrl: photo3, caption: "Mi princesa", date: "2025-12-01" },
    { id: 3, imageUrl: photo4, caption: "Eres perfecta tal y como eres", date: "2025-12-02" },
    { id: 4, imageUrl: photo5, caption: "AMO TUS OJOOOOOOS", date: "2024-03-20" },
    { id: 5, imageUrl: photo6, caption: "¿Ahora si crees que te amo mas?", date: "2026-02-02" },
    { id: 6, imageUrl: photo7, caption: "Tu..Eres..Mi...Vida", date: "2024-03-20" },
    { id: 7, imageUrl: photo8, caption: "¿Sabias que yo te amo mas?", date: "2025-11-20" },
    { id: 8, imageUrl: photo9, caption: "Mis ojitos lindos", date: "2024-03-20" },
    { id: 9, imageUrl: photo10, caption: "ES QUE MIRATE", date: "2024-03-20" },
    { id: 10, imageUrl: photo11, caption: "Mi princesa", date: "2024-03-20" }
  ];

  // Combine default and custom photos
  const photosData = [...defaultPhotos, ...customPhotos];

  const handleSavePhoto = (newPhoto: { imageUrl: string; caption: string; date: string }) => {
    const id = Math.max(...photosData.map(p => p.id), 0) + 1;
    const photo: Photo = { id, ...newPhoto };
    
    const updated = [...customPhotos, photo];
    setCustomPhotos(updated);
    localStorage.setItem("customPhotos", JSON.stringify(updated));
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
          style={{ perspective: 1000 }}
          animate={{ 
            rotateY: [0, 10, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-40 scale-150" />
          
          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6 rounded-3xl shadow-2xl">
            <Camera className="w-16 h-16 text-white relative z-10" />
            
            {/* Floating image icon */}
            <motion.div
              className="absolute -bottom-2 -right-2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -15, 15, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-full p-2 shadow-lg">
                <ImageIcon className="w-7 h-7 text-blue-500" />
              </div>
            </motion.div>

            {/* Floating hearts */}
            {[...Array(4)].map((_, i) => {
              const angle = (i * 90 + 45) * Math.PI / 180;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${50 + 65 * Math.cos(angle)}%`,
                    left: `${50 + 65 * Math.sin(angle)}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [0.9, 1.3, 0.9],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 fill-blue-300 text-blue-300" />
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
          Nuestro Álbum
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Momentos especiales que guardamos juntos 📸
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />
            
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />

            <Plus className="w-6 h-6 text-white relative z-10" />
            <span className="text-white font-semibold relative z-10">Agregar Foto</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl blur-xl bg-blue-500/50 -z-10" />
          </motion.button>
        )}
      </motion.div>

      {/* Photos Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {photosData.map((photo, index) => {
            // Random rotation for polaroid effect
            const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1);

            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.7, rotateZ: rotation * 3 }}
                animate={{ opacity: 1, scale: 1, rotateZ: rotation }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.4
                }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedPhoto(photo.id)}
                whileHover={{ 
                  scale: 1.05, 
                  rotateZ: 0,
                  zIndex: 10,
                  y: -12
                }}
              >
                {/* Polaroid card */}
                <div className="bg-white p-4 pb-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Photo container */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                    <img
                      src={photo.imageUrl}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-center"
                      >
                        <p className="text-white font-medium text-sm leading-snug mb-2">{photo.caption}</p>
                        <p className="text-white/80 text-xs">{photo.date}</p>
                      </motion.div>
                    </div>

                    {/* Corner sparkle */}
                    <motion.div
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  {/* Caption (polaroid style) */}
                  <div className="mt-3 text-center">
                    <p className="text-gray-700 text-sm font-handwriting italic truncate px-2">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Tape effect at top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 backdrop-blur-sm border-2 border-white/80 rounded-sm shadow-sm rotate-0 opacity-70" />
                </div>

                {/* Floating heart on hover */}
                <motion.div
                  className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-3 shadow-2xl">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                </motion.div>

                {/* Shadow glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl -z-10 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {photosData.length === 0 && (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-2xl bg-blue-200 opacity-50" />
            <Camera className="w-24 h-24 mx-auto text-blue-300 relative" />
          </div>
          <p className="text-gray-400 text-lg">Aún no hay fotos. ¡Pronto agregaré nuestros recuerdos!</p>
        </motion.div>
      )}

      {/* Full screen photo modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.7, y: 100, rotateX: -20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.7, y: 100, rotateX: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: 2000 }}
            >
              {photosData
                .filter((p) => p.id === selectedPhoto)
                .map((photo) => (
                  <div key={photo.id} className="relative">
                    {/* Photo frame */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl">
                      {/* Image */}
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                        <img
                          src={photo.imageUrl}
                          alt={photo.caption}
                          className="w-full h-auto max-h-[70vh] object-contain"
                        />
                      </div>

                      {/* Caption section */}
                      <div className="mt-6 text-center space-y-3">
                        <div className="flex items-center justify-center gap-3">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
                          </motion.div>
                          <p className="text-gray-800 text-xl font-medium">{photo.caption}</p>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          >
                            <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
                          </motion.div>
                        </div>
                        <p className="text-gray-500 text-base flex items-center justify-center gap-2">
                          <span>📅</span>
                          <span>{photo.date}</span>
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-50 animate-pulse" />
                  </div>
                ))}
            
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white text-xl font-bold"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-7 h-7" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add photo modal */}
      <AnimatePresence>
        {showModal && (
          <AddPhotoModal
            onClose={() => setShowModal(false)}
            onSave={handleSavePhoto}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
