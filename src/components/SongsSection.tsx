import { Music, Download, Play, Pause, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useDevMode } from "../hooks/useDevMode";
import { AddSongModal } from "./AddSongModal";

// Importa tus archivos MP3 aquí (igual que las fotos en el álbum)
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

// Canciones base - puedes editar esto directamente
// IMPORTANTE: Para que funcionen, importa tus MP3 arriba y úsalos aquí
const BASE_SONGS: Song[] = [
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

export function SongsSection() {
  const isDevMode = useDevMode();
  const [showModal, setShowModal] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [audioErrors, setAudioErrors] = useState<Set<number>>(new Set());
  const [audioLoaded, setAudioLoaded] = useState<Set<number>>(new Set());
  const [customSongs, setCustomSongs] = useState<Song[]>([]);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  // Load custom songs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customSongs");
    if (saved) {
      setCustomSongs(JSON.parse(saved));
    }
  }, []);

  // Combine base songs and custom songs
  const allSongs = [...BASE_SONGS, ...customSongs];

  // Reset audio errors when songs change
  useEffect(() => {
    setAudioErrors(new Set());
    setAudioLoaded(new Set());
  }, [allSongs.length]);

  const handleSaveSong = (newSong: { title: string; description: string; audioUrl: string; date: string }) => {
    const id = Math.max(...allSongs.map(s => s.id), 0) + 1;
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

  const handleAudioLoaded = (id: number) => {
    setAudioLoaded(prev => new Set(prev).add(id));
    // Remove from errors if it was there
    setAudioErrors(prev => {
      const newErrors = new Set(prev);
      newErrors.delete(id);
      return newErrors;
    });
  };

  const handleAudioError = (id: number) => {
    // Only mark as error if it hasn't loaded successfully
    if (!audioLoaded.has(id)) {
      setAudioErrors(prev => new Set(prev).add(id));
    }
    if (currentPlaying === id) {
      setCurrentPlaying(null);
    }
  };

  const handleDownload = (audioUrl: string, title: string) => {
    // Si el audioUrl es un import (blob o data URL), descargarlo directamente
    // Si es una URL normal, intentar descargar
    fetch(audioUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${title}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(() => {
        // Fallback: intentar descarga directa si fetch falla
        const link = document.createElement("a");
        link.href = audioUrl;
        link.download = `${title}.mp3`;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Music className="w-12 h-12 mx-auto mb-4 text-pink-500" />
        <h2 className="text-pink-600 mb-2">Mis Canciones Para Ti</h2>
        <p className="text-gray-600">
          Cada canción es una parte de mi corazón
        </p>

        {isDevMode && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Agregar Canción
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {allSongs.map((song, index) => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => handlePlayPause(song.id)}
                disabled={audioErrors.has(song.id)}
                className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md ${audioErrors.has(song.id) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {currentPlaying === song.id ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <h3 className="text-gray-800 truncate">{song.title}</h3>
                <p className="text-gray-500 text-sm">{song.description}</p>
                <p className="text-gray-400 text-xs mt-1">{song.date}</p>
                {audioErrors.has(song.id) && (
                  <p className="text-orange-500 text-xs mt-1">
                    ⚠️ Audio no disponible
                  </p>
                )}
              </div>

              <button
                onClick={() => handleDownload(song.audioUrl, song.title)}
                className="flex-shrink-0 p-3 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors"
                title="Descargar"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

            <audio
              ref={(el) => {
                if (el) audioRefs.current[song.id] = el;
              }}
              src={song.audioUrl}
              onEnded={() => setCurrentPlaying(null)}
              onError={() => handleAudioError(song.id)}
              onLoadedData={() => handleAudioLoaded(song.id)}
            />
          </motion.div>
        ))}
      </div>

      {allSongs.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Music className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>Aún no hay canciones. ¡Pronto agregaré más!</p>
        </div>
      )}

      {showModal && (
        <AddSongModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveSong}
        />
      )}
    </div>
  );
}