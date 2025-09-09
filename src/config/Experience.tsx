import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Invisible Tech',
    position: 'STEM AI Data Trainer (Freelance)',
    location: 'Remote, Canada',
    image: '/company/invisible-tech.png',
    description: [
      'Curated STEM datasets and rubric-based evaluations for LLMs; implemented checks to verify math / code output and prevent regressions.',
      'Surfaced insights that guided prompt/data updates and improved model behavior.',
    ],
    startDate: 'Jul 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Python',
        href: 'https://python.org/',
        icon: <TypeScript />, // Using TypeScript icon as placeholder for Python
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://invisibletech.ai/',
    github: 'https://github.com/invisible-tech',
  },
  {
    isCurrent: false,
    company: 'University of Windsor',
    position: 'Web Developer',
    location: 'Windsor, ON',
    image: '/company/uwindsor.png',
    description: [
      "Optimized Student Services' Drupal site for mobile: reduced asset payloads and refactored templates, improving Core Web Vitals (Lighthouse mobile performance moved into 'Good' range).",
      'Standardized reusable components and streamlined content workflows, lowering page maintenance overhead and accelerating updates across pages.',
      'Completed an accessibility audit (WCAG) and resolved semantic roles, alt text, and focus issues to improve keyboard navigation and screen-reader compatibility.',
    ],
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    technologies: [
      {
        name: 'Drupal',
        href: 'https://drupal.org/',
        icon: <TypeScript />, // Using TypeScript icon as placeholder for Drupal
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
    ],
    website: 'https://uwindsor.ca',
    github: 'https://github.com/uwindsorcss',
  },
  {
    isCurrent: false,
    company: 'Leo Club Eternity Service (NGO)',
    position: 'Web Developer',
    location: 'New Delhi, India',
    image: '/company/leo-club.png',
    description: [
      'Co-designed and launched the organization website; improved information architecture and SEO (structured metadata, sitemap) to lift first-month organic traffic.',
      'Applied UX and accessibility best practices to simplify navigation and broaden reach.',
    ],
    startDate: 'Jun 2023',
    endDate: 'Aug 2023',
    technologies: [
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
    ],
    website: 'https://www.lionsclubs.org',
    github: 'https://github.com/CodeChefVIT/LeoClub-Website',
  },
];
