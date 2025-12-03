import { Heart, BookOpen, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useDevMode } from "../hooks/useDevMode";
import { AddPoemModal } from "./AddPoemModal";

interface Poem {
  id: number;
  title: string;
  content: string;
  date: string;
}

// Poemas base - puedes editar esto directamente
const BASE_POEMS: Poem[] = [
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
    title: "¿Que es suerte?",
    content: "Eres mi \"nada\" cuando la gente me encuentra con la\nmirada perdida y me pregunta: ¿En qué piensas?",
    date: "2025-12-03"
  },
  {
    id: 4,
    title: "¿Que es suerte?",
    content: "Tome un lápiz y empecé a escribir sin ningúna razón\npero al poco tiempo ella se convirtió en mi inspiración\mElla es mi más grande amor simplemente ella es y será\nla dueńa de mi corazón",
    date: "2025-12-03"
  }

];





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

  // Combine base poems and custom poems
  const allPoems = [...BASE_POEMS, ...customPoems];

  const handleSavePoem = (newPoem: { title: string; content: string; date: string }) => {
    const id = Math.max(...allPoems.map(p => p.id), 0) + 1;
    const poem: Poem = { id, ...newPoem };

    const updated = [...customPoems, poem];
    setCustomPoems(updated);
    localStorage.setItem("customPoems", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-500" />
        <h2 className="text-purple-600 mb-2">Poemas del Corazón</h2>
        <p className="text-gray-600">
          Palabras que nacen del alma para ti
        </p>

        {isDevMode && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Agregar Poema
          </button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {allPoems.map((poem, index) => (
          <motion.div
            key={poem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-purple-100"
          >
            <div className="flex items-start gap-3 mb-4">
              <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-purple-700 mb-1">{poem.title}</h3>
                <p className="text-gray-400 text-xs">{poem.date}</p>
              </div>
            </div>

            <div className="bg-white/50 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {poem.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {allPoems.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>Aún no hay poemas. ¡Pronto escribiré más para ti!</p>
        </div>
      )}

      {showModal && (
        <AddPoemModal
          onClose={() => setShowModal(false)}
          onSave={handleSavePoem}
        />
      )}
    </div>
  );
}