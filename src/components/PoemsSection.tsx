import { Heart, BookOpen, Plus, Feather, Sparkles, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useDevMode } from "../hooks/useDevMode";
import { AddPoemModal } from "./AddPoemModal";

interface Poem {
  id: number;
  title: string;
  content: string;
  date: string;
}

export function PoemsSection() {
  const isDevMode = useDevMode();
  const [showModal, setShowModal] = useState(false);
  const [customPoems, setCustomPoems] = useState<Poem[]>([]);

  // Load custom poems from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customPoems");
    if (saved) {
      setCustomPoems(JSON.parse(saved));
    }
  }, []);

  // Default poems
  const defaultPoems: Poem[] = [
    {
      id: 1,
      title: "Tus Ojos",
      content: "Hay luces que nunca quisiera que se apaguen,\ntus ojos, por ejemplo.",
      date: "2024-12-03"
    },
    {
      id: 2,
      title: "Tu Sonrisa",
      content: "Tu sonrisa ilumina mis días,\nTus ojos son mi guía,\nEn ti encontré la alegría,\nEres todo lo que quería.",
      date: "2024-01-20"
    },
    {
      id: 3,
      title: "Juntos",
      content: "Cada momento a tu lado,\nEs un sueño realizado,\nContigo he encontrado,\nEl amor que había buscado.",
      date: "2025-12-03"
    }
    ,
    {
      id: 4,
      title: "Moriria por ti",
      content: "Todas las rosas tienen espinas,\ntu muéstrame cuáles son las tuyas\ny yo te mostraré unas manos dispuestas a sangrar por ti.",
      date: "2025-12-03"
    },
    {
      id: 4,
      title: "(Proverbios 31:29)",
      content: "Muchas mujeres hicieron el bien,\nmas tú sobrepasas a todas. ",
      date: "2025-12-03"
    },
    {
      id: 4,
      title: "¿Que es suerte?",
      content: "Nunca encontré un trébol de cuatro hojas pero te encontré a ti.\nSupongo que...La suerte llega de diferentes maneras.",
      date: "2025-12-03"
    },
    {
      id: 4,
      title: "Eres la causa de mi locura",
      content: "Eres mi \"nada\" cuando la gente me encuentra con la\nmirada perdida y me pregunta: ¿En qué piensas?",
      date: "2025-12-03"
    },
    {
      id: 4,
      title: "¿Acaso Dios no hizo mujer mas hermosa como tu?",
      content: "Tome un lápiz y empecé a escribir sin ningúna razón\npero al poco tiempo ella se convirtió en mi inspiración\mElla es mi más grande amor simplemente ella es y será\nla dueńa de mi corazón",
      date: "2025-12-03"
    }
  ];

  // Combine default and custom poems
  const poemsData = [...defaultPoems, ...customPoems];

  const handleSavePoem = (newPoem: { title: string; content: string; date: string }) => {
    const id = Math.max(...poemsData.map(p => p.id), 0) + 1;
    const poem: Poem = { id, ...newPoem };
    
    const updated = [...customPoems, poem];
    setCustomPoems(updated);
    localStorage.setItem("customPoems", JSON.stringify(updated));
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
            y: [0, -8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-40 scale-150" />
          
          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600 p-6 rounded-3xl shadow-2xl">
            <BookOpen className="w-16 h-16 text-white relative z-10" />
            
            {/* Flying feather */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ 
                y: [-3, 3, -3],
                rotate: [0, 10, -5, 10, 0],
                x: [0, 2, -2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-full p-2 shadow-lg">
                <Feather className="w-7 h-7 text-purple-500" />
              </div>
            </motion.div>

            {/* Floating hearts */}
            {[...Array(4)].map((_, i) => {
              const angle = (i * 90) * Math.PI / 180;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${50 + 65 * Math.cos(angle)}%`,
                    left: `${50 + 65 * Math.sin(angle)}%`,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
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
          Poemas del Corazón
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Palabras que nacen del alma para ti 💜
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600" />
            
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />

            <Plus className="w-6 h-6 text-white relative z-10" />
            <span className="text-white font-semibold relative z-10">Agregar Poema</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl blur-xl bg-purple-500/50 -z-10" />
          </motion.button>
        )}
      </motion.div>

      {/* Poems Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {poemsData.map((poem, index) => (
            <motion.div
              key={poem.id}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                bounce: 0.3
              }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #c084fc, #ec4899, #8b5cf6)",
                  backgroundSize: "200% 200%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Card */}
              <motion.div
                className="relative glass-card rounded-3xl p-8 shadow-xl border-2 border-white/30 overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-200/20 via-pink-200/10 to-transparent rounded-bl-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200/20 via-purple-200/10 to-transparent rounded-tr-[100px] pointer-events-none" />
                
                {/* Quote decoration top-left */}
                <div className="absolute top-6 left-6 opacity-10">
                  <Quote className="w-12 h-12 text-purple-500 rotate-180" />
                </div>
                
                {/* Quote decoration bottom-right */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-pink-500" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                        rotate: [0, 8, -8, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl shadow-lg">
                        <Heart className="w-6 h-6 text-white fill-white" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text mb-2">
                        {poem.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-purple-400">
                        <span>✍️</span>
                        <span>{poem.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Poem content */}
                  <div className="relative">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-inner border border-purple-100/30">
                      <p className="text-gray-800 whitespace-pre-line leading-relaxed italic text-base">
                        {poem.content}
                      </p>
                    </div>
                  </div>

                  {/* Decorative line */}
                  <motion.div 
                    className="mt-6 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>

                {/* Floating sparkles on hover */}
                <motion.div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400 fill-yellow-300" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {poemsData.length === 0 && (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-2xl bg-purple-200 opacity-50" />
            <BookOpen className="w-24 h-24 mx-auto text-purple-300 relative" />
          </div>
          <p className="text-gray-400 text-lg">Aún no hay poemas. ¡Pronto escribiré más para ti!</p>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <AddPoemModal
            onClose={() => setShowModal(false)}
            onSave={handleSavePoem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
