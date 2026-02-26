'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stardust-white text-night-sky-black font-body">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex w-full max-w-5xl flex-col items-center justify-center py-20 px-8"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative w-48 h-48 mx-auto"
          >
            {/* Placeholder for a central hero image/logo for Pleiades, if available */}
            <Image
              src="/public/globe.svg" // Using a placeholder for now
              alt="Pleiades Star Cluster Logo"
              layout="fill"
              objectFit="contain"
              className="drop-shadow-lg"
            />
          </motion.div>

          <h1 className="font-heading text-6xl font-extrabold text-cosmic-purple leading-tight">
            The Story of Pleiades
          </h1>
          <p className="font-body text-xl text-night-sky-black max-w-2xl mx-auto leading-relaxed">
            Join us on an adventurous journey through the cosmos to discover the origin and unique talents of the Pleiades team. Each star shines with a special light, and together, we create magic!
          </p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 px-8 py-4 bg-sky-blue text-stardust-white font-heading text-lg rounded-full shadow-lg hover:bg-cosmic-purple transition-colors duration-300"
          >
            Begin the Journey
          </motion.button>
        </div>
      </motion.main>
    </div>
  );
}
