import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { MainScreen } from "./components/MainScreen";

export default function App() {
  const [started, setStarted] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleStart = () => {
    setShowTransition(true);
    setTimeout(() => {
      setStarted(true);
      setShowTransition(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!started && !showTransition && (
          <motion.div
            key="welcome"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}

        {showTransition && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400"
          >
            <div className="text-center">
              {/* Corazón animado */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1, 1.1, 1] }}
                transition={{ duration: 1.5, times: [0, 0.3, 0.5, 0.7, 1] }}
                className="text-9xl mb-8"
              >
                ❤️
              </motion.div>

              {/* Texto animado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-white text-3xl">Te amo ❤️</p>
              </motion.div>

              {/* Partículas de corazones */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * Math.PI * 2) / 12) * 200,
                    y: Math.sin((i * Math.PI * 2) / 12) * 200,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    times: [0, 0.5, 1],
                  }}
                  className="absolute top-1/2 left-1/2 text-4xl"
                  style={{ transformOrigin: "center" }}
                >
                  💕
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {started && !showTransition && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MainScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
