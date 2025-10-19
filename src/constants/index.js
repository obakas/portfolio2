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
  smart,
  contract,
  fullstack,
  solana,
  solidity,
  wagmi,
  nextjs,
  bootstrap,
  cpp,
  python,
  vercel,
  mysql,
  crowdfund,
  chainlegacy,
  traceFund,
  upwork,
  CodeGeeks9ja,
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
    title: 'Solidity Smart Contract Developer',
    icon: smart,
  },
  // {
  //   title: 'Fullstack Development',
  //   icon: fullstack,
  // },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'wagmi',
    icon: wagmi,
  },
  {
    name: 'solidity',
    icon: solidity,
  },
  {
    name: 'solana',
    icon: solana,
  },
  // {
  //   name: 'bootstrap',
  //   icon: bootstrap,
  // },
  // {
  //   name: 'c++',
  //   icon: cpp,
  // },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'vercel',
    icon: vercel,
  },
];

const experiences = [
  {
    title: 'Intern - Full Stack Developer',
    company_name: 'CodeGeeks9ja',
    icon: CodeGeeks9ja,
    iconBg: '#333333',
    date: 'Jul 2024 - Present',
  },
  {
    title: '175 Participants Github Copilot and Crowdbotics study',
    company_name: 'Upwork enterprise client',
    icon: upwork,
    iconBg: '#333333',
    date: 'Jan 26, 2025 - Mar 4, 2025',
  },
  {
    title: 'Participant for Python Programming Study with Flask',
    company_name: 'Upwork',
    icon: upwork,
    iconBg: '#333333',
    date: 'Jul 2022 - Jul 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'CrowdFund DApp',
    description: 'A decentralized crowdfunding application built on the Ethereum blockchain.',
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
    image: crowdfund,
    repo: 'https://github.com/obakas/Fund-Idris',
    demo: 'https://www.youtube.com/watch?v=cOxl-miweWI',
  },
  {
    id: 'project-2',
    name: 'ChainLegacy DApp',
    description:
      'A decentralized application that allows users to create and manage their own blockchain-based assets on the Ethereum blockchain.',
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
    image: chainlegacy,
    repo: 'https://github.com/obakas/ChainLegacy',
    demo: 'https://www.youtube.com/watch?v=us9rYZU3q7k&feature=youtu.be',
  },
  {
    id: 'project-3',
    name: 'FundTrace DApp',
    description: 'This is a decentralized application that allows users to track and manage their funds on Solana blockchain.',
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
    image: traceFund,
    repo: 'https://github.com/obakas/kamil-wallet-tracker-2',
    demo: ' ',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
