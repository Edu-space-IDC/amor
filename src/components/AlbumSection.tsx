import { Camera, Heart, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useDevMode } from "../hooks/useDevMode";
import { AddPhotoModal } from "./AddPhotoModal";
import photo1 from "figma:asset/cf2b12e31fa3174ddc5061b75f6f36183ca3ef9c.png";
import photo2 from "../assets/1.png";
import photo3 from "../assets/2.png";
import photo4 from "../assets/3.jpeg";
import photo5 from "../assets/4.jpeg";
import photo6 from "../assets/5.jpeg";
import photo7 from "../assets/6.jpeg";

interface Photo {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}

// Fotos base - las dos primeras son tus fotos importadas
const BASE_PHOTOS: Photo[] = [
  {
    id: 1,
    imageUrl: photo1,
    caption: "Momentos especiales juntos ❤️",
    date: "2024-12-03"
  },
  {
    id: 2,
    imageUrl: photo2,
    caption: "Recuerdos inolvidables",
    date: "2024-02-14"
  },
  {
    id: 3,
    imageUrl: photo3,
    caption: "Te amo mi amor",
    date: "2024-03-20"
  }
  ,
  {
    id: 4,
    imageUrl: photo4,
    caption: "Eres perfecta tal y como eres",
    date: "2024-03-20"
  },
  {
    id: 5,
    imageUrl: photo5,
    caption: "AMO TUS OJOOOOOOS",
    date: "2024-03-20"
  },
  {
    id: 6,
    imageUrl: photo6,
    caption: "¿Ahora si crees que te amo mas?",
    date: "2024-03-20"
  },
  {
    id: 7,
    imageUrl: photo7,
    caption: "Tu..Eres..Mi...Vida",
    date: "2024-03-20"
  }
];

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

  // Combine base photos and custom photos
  const photosData = [...BASE_PHOTOS, ...customPhotos];

  const handleSavePhoto = (newPhoto: { imageUrl: string; caption: string; date: string }) => {
    const id = Math.max(...photosData.map(p => p.id), 0) + 1;
    const photo: Photo = { id, ...newPhoto };
    
    const updated = [...customPhotos, photo];
    setCustomPhotos(updated);
    localStorage.setItem("customPhotos", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Camera className="w-12 h-12 mx-auto mb-4 text-blue-500" />
        <h2 className="text-blue-600 mb-2">Nuestro Álbum</h2>
        <p className="text-gray-600">
          Momentos especiales que guardamos juntos
        </p>

        {isDevMode && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Agregar Foto
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photosData.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedPhoto(photo.id)}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-blue-100 to-pink-100">
              <img
                src={photo.imageUrl}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-4">
              <p className="text-white text-sm">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {photosData.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Camera className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>Aún no hay fotos. ¡Pronto agregaré nuestros recuerdos!</p>
        </div>
      )}

      {/* Modal para ver foto en grande */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {photosData
              .filter((p) => p.id === selectedPhoto)
              .map((photo) => (
                <div key={photo.id}>
                  <img
                    src={photo.imageUrl}
                    alt={photo.caption}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-pink-400" />
                      <p className="text-white">{photo.caption}</p>
                    </div>
                    <p className="text-gray-300 text-sm">{photo.date}</p>
                  </div>
                </div>
              ))}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {showModal && (
        <AddPhotoModal
          onClose={() => setShowModal(false)}
          onSave={handleSavePhoto}
        />
      )}
    </div>
  );
}