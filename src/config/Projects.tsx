import CSS from '@/components/technologies/CSS';
import CloudRun from '@/components/technologies/CloudRun';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Mapbox from '@/components/technologies/Mapbox';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import SQLite from '@/components/technologies/SQLite';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Animathic',
    description:
      'Converts natural-language math prompts into Manim animations by generating Python scene code with an LLM and rendering via Manim.',
    image: '/project/animathic.png',
    video: '', // Keeping video section as requested
    link: 'https://animathic.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'SQLite', icon: <SQLite key="sqlite" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Cloud Run', icon: <CloudRun key="cloudrun" /> },
    ],
    github: 'https://github.com/arpan-tanwar/animathic',
    live: 'https://animathic.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/animathic',
    isWorking: true,
  },
  {
    title: 'Cosmic-Clock',
    description:
      '3D interactive solar-system learning app for NASA Space Apps; implemented scene transitions and interactive controls to increase time-on-task for STEM concepts.',
    image: '/project/cosmic-clock.png',
    video: '', // Keeping video section as requested
    link: 'https://space-cosmic-clock.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/arpan-tanwar/CosmicClock',
    live: 'https://space-cosmic-clock.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/cosmic-clock',
    isWorking: true,
  },
  {
    title: 'Comfort Cove',
    description:
      'Full-stack listings platform: authentication, CRUD listings, image upload, reviews, and interactive maps; deployed on Render with environment-based config.',
    image: '/project/comfort-cove.png',
    video: '', // Keeping video section as requested
    link: 'https://comfortcove-33pi.onrender.com/listings',
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Mapbox', icon: <Mapbox key="mapbox" /> },
    ],
    github: 'https://github.com/arpan-tanwar/ComfortCove',
    live: 'https://comfortcove-33pi.onrender.com/listings',
    details: true,
    projectDetailsPageSlug: '/projects/comfort-cove',
    isWorking: true,
  },
  {
    title: 'Guess My Number',
    description:
      'Guess My Number is a game where you guess a number and the computer guesses a number.',
    image: '/project/guess-my-number.png',
    video: '', // Keeping video section as requested
    link: 'https://arpan-tanwar-guess-my-number.netlify.app/',
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/arpan-tanwar/guess-my-number',
    live: 'https://arpan-tanwar-guess-my-number.netlify.app/',
    details: true,
    projectDetailsPageSlug: '/projects/guess-my-number',
    isWorking: true,
  },
  {
    title: 'Pig Game',
    description:
      'Pig Game is a game where you roll a dice and you can hold or roll again.',
    image: '/project/pig-game.png',
    video: '', // Keeping video section as requested
    link: 'https://arpan-tanwar-pig-game.netlify.app/',
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/arpan-tanwar/pig-game',
    live: 'https://arpan-tanwar-pig-game.netlify.app/',
    details: true,
    projectDetailsPageSlug: '/projects/pig-game',
    isWorking: true,
  },
];
