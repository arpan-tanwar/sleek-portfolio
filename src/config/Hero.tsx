/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import ThreeJs from '@/components/technologies/ThreeJs';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  TypeScript: TypeScript,
  NodeJs: NodeJs,
  ThreeJs: ThreeJs,
  Python: Python,
};

export const heroConfig = {
  // Personal Information
  name: 'Arpan',
  title: 'A Full Stack Engineer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Three.js',
      href: 'https://threejs.org/',
      component: 'ThreeJs',
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I craft fast, accessible apps with {skills:0}, {skills:1}, {skills:2}, and {skills:3}, blending 3D interactivity in {skills:4} with {skills:5} + <b>AI</b> smarts.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/whyisarpan',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arpan-tanwar/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/arpan-tanwar',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:arpantanwar.at@gmail.com',
    icon: <Mail />,
  },
];
