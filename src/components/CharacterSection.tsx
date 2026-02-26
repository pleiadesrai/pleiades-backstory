// src/components/CharacterSection.tsx

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Character } from '@/data/characters';

interface CharacterSectionProps {
  character: Character;
  index: number; // To help with staggered animations if needed
}

const CharacterSection = ({ character, index }: CharacterSectionProps) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      variants={animationVariants}
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-20 px-8 bg-stardust-white overflow-hidden"
    >
      {/* Background element for unique character color */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundColor: `var(--tw-colors-${character.color})` }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-12">
        {/* Character Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative rounded-full overflow-hidden shadow-2xl"
        >
          <Image
            src={character.image} // Using path from character data
            alt={character.name}
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          {/* Subtle effect for social media look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
        </motion.div>

        {/* Character Info */}
        <div className="text-center md:text-left space-y-6 flex-grow">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
            className="font-heading text-5xl font-bold text-cosmic-purple"
          >
            {character.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
            className="font-body text-lg text-night-sky-black leading-relaxed"
          >
            {character.bio}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
            className="font-body text-md text-sky-blue italic"
          >
            Social Media Look: {character.socialMediaLook}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default CharacterSection;
