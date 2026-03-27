import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Business Analyst',
    icon: frontend,
  },
  {
    title: 'Finance Analyst',
    icon: backend,
  },
  {
    title: 'Business Process Analyst',
    icon: ux,
  },
  {
    title: 'Project Management',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Exam Registration Support Staff (Part-time)',
    company_name: 'Long Son Educational Technology Company Limited',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2025 - Aug 2025',
  },
  {
    title: 'Data Entry Intern (Full-time)',
    company_name: 'Phong Tot JSC',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2025 - Oct 2025',
  },
  {
    title: 'Investment Analyst Intern',
    company_name: 'FINTOP Company Limited',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Oct 2025 - Now',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'E-commerce System',
    description: 'This project analyzes and designs an end-to-end e-commerce system, focusing on improving user shopping experience and optimizing conversion rate.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/lieu1410/E-commerce-System-Project',
    demo: 'https://github.com/lieu1410/E-commerce-System-Project',
  },
  {
    id: 'project-2',
    name: 'Affect of FDI on Green Growth',
    description:
      'This research explores the impact of green growth in developing Southeast Asian countries.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://drive.google.com/file/d/1o1JTLsFhG4OJzNtDYZNScOAUMHkEk2Lw/view?usp=drive_link',
    demo: 'https://drive.google.com/file/d/1o1JTLsFhG4OJzNtDYZNScOAUMHkEk2Lw/view?usp=drive_link',
  },
  {
    id: 'project-3',
    name: 'HR Performance Analysis',
    description: 'This project analyzes HR data from 2014–2019 to evaluate employee performance, compensation, productivity, and resignation trends.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/lieu1410/HR-Performance-Analysis',
    demo: 'https://github.com/lieu1410/HR-Performance-Analysis',
  },
  ];

export { services, technologies, experiences, projects };
