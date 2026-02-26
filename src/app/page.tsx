'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import CharacterSection from "@/components/CharacterSection";
import { characters } from "@/data/characters";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="relative bg-stardust-white text-night-sky-black font-body" ref={containerRef}>
      {/* Hero Section - Sticky with Parallax */}
      <div className="sticky top-0 h-screen overflow-hidden z-0">
        <motion.div
          style={{ y: parallaxY }}
          className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-8 p-8"
        >
          {/* Parallax Background Layers */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/images/starfield.svg" // Placeholder for a starfield background
              alt="Starfield Background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative w-48 h-48 mx-auto mb-8"
            >
              <Image
                src="/images/pleiades-logo-placeholder.svg"
                alt="Pleiades Star Cluster Logo"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-lg"
              />
            </motion.div>

            <h1 className="font-heading text-6xl font-extrabold text-cosmic-purple leading-tight">
              The Story of Pleiades
            </h1>
            <p className="font-body text-xl text-stardust-white max-w-2xl mx-auto leading-relaxed mt-4">
              Join us on an adventurous journey through the cosmos to discover the origin and unique talents of the Pleiades team. Each star shines with a special light, and together, we create magic!
            </p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-10 px-8 py-4 bg-sky-blue text-night-sky-black font-heading text-lg rounded-full shadow-lg hover:bg-cosmic-purple transition-colors duration-300"
            >
              Begin the Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Character Sections - Scrolls over the Hero */}
      <div className="relative z-10 bg-stardust-white">
        {characters.map((character, index) => (
          <CharacterSection key={character.id} character={character} index={index} />
        ))}
      </div>
    </div>
  );
}
