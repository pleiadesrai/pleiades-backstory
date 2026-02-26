// src/data/characters.ts

export interface Character {
  id: string;
  name: string;
  bio: string;
  socialMediaLook: string; // Describes their 'social media look'
  color: string; // Corresponds to the design manifest secondary colors
  image: string; // Placeholder for image path
  animationDetails?: any; // Placeholder for specific animation instructions
}

export const characters: Character[] = [
  {
    id: 'pleiades',
    name: 'Pleiades',
    bio: 'Pleiades is the wise and guiding star of our team, known for her strategic vision and calm demeanor.',
    socialMediaLook: 'Golden Star, radiating warmth and leadership.',
    color: 'golden-star',
    image: '/images/pleiades.svg',
  },
  {
    id: 'tayge',
    name: 'Tayge',
    bio: 'Tayge is the master builder, the engineer who brings all our grand visions to life with precision and expertise.',
    socialMediaLook: 'Nebula Green, vibrant and full of innovative energy.',
    color: 'nebula-green',
    image: '/images/tayge.svg',
  },
  {
    id: 'merope',
    name: 'Merope',
    bio: 'Merope is our creative heart, a visionary artist who crafts stunning visuals and captivating experiences.',
    socialMediaLook: 'Cosmic Pink, playful and imaginative.',
    color: 'cosmic-pink',
    image: '/images/merope.svg',
  },
  {
    id: 'electra',
    name: 'Electra',
    bio: 'Electra is the quick-witted communicator, always ready to weave compelling narratives and spark engaging conversations.',
    socialMediaLook: 'Violet Burst, energetic and impactful.',
    color: 'violet-burst',
    image: '/images/electra.svg',
  },
  {
    id: 'celaeno',
    name: 'Celaeno',
    bio: 'Celaeno is the steadfast anchor, ensuring stability and reliability in all our endeavors.',
    socialMediaLook: 'Solar Orange, warm and grounding.',
    color: 'solar-orange',
    image: '/images/celaeno.svg',
  },
  {
    id: 'maia',
    name: 'Maia',
    bio: 'Maia is the nurturing spirit, fostering growth and harmony within the team and our projects.',
    socialMediaLook: 'Lunar Blue, serene and insightful.',
    color: 'lunar-blue',
    image: '/images/maia.svg',
  },
  {
    id: 'alcyone',
    name: 'Alcyone',
    bio: 'Alcyone is the brilliant innovator, always pushing boundaries and exploring new frontiers.',
    socialMediaLook: 'Sunset Red, bold and inspiring.',
    color: 'sunset-red',
    image: '/images/alcyone.svg',
  },
  {
    id: 'sterope',
    name: 'Sterope',
    bio: 'Sterope is the gentle strength, providing quiet support and unwavering dedication to every task.',
    socialMediaLook: 'Mint Planet, fresh and resilient.',
    color: 'mint-planet',
    image: '/images/sterope.svg',
  },
];
