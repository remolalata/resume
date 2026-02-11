import coworkImage from '../assets/images/projects/cowork.png'
import shopCoImage from '../assets/images/projects/shop.co.png'
import imageGalleryView from '../assets/images/projects/image-gallery-view.png'
import pokedexImage from '../assets/images/projects/pokedex.png'

export type ExperienceItem = {
  company: string
  role: string
  dates: string
  bullets: string[]
}

export type ProjectItem = {
  name: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
  image?: { src: string; alt: string }
}

export type ReferenceItem = {
  name: string
  company: string
  role: string
  contact: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Profile = {
  name: string
  role: string
  headline: string
  summary: string
  location: string
  phone: string
  email: string
  linkedin: string
  resumeUrl: string
}

export type NavLink = {
  href: string
  label: string
}

export const profile: Profile = {
  name: 'Remo Antonio Lalata',
  role: 'Frontend Developer',
  headline: 'Building scalable, accessible, and high-performing web experiences for modern teams.',
  summary:
    'Frontend Developer with 8+ years of experience creating scalable, high-performing, and accessible web applications. Proficient in React, JavaScript, and A/B testing, with a demonstrated ability to optimize performance and ensure compliance with accessibility standards.',
  location: 'Manaoag, Pangasinan',
  phone: '+63 906 356 2650',
  email: 'lalata.remo@gmail.com',
  linkedin: 'https://linkedin.com/in/remolalata/',
  resumeUrl: '/remo-antonio-lalata.pdf',
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#references', label: 'References' },
  { href: '#contact', label: 'Contact' },
]

export const skills: SkillGroup[] = [
  {
    title: 'Markup & Styling',
    items: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'jQuery'],
  },
  {
    title: 'Build Tools',
    items: ['Vite', 'Webpack'],
  },
  {
    title: 'APIs & Testing',
    items: ['REST API', 'A/B Testing', 'Jest', 'React Testing Library', 'Vitest'],
  },
  {
    title: 'Version Control',
    items: ['Git', 'Bitbucket'],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Wink Reports',
    role: 'Frontend Developer',
    dates: 'Feb 2025 - Present',
    bullets: [
      'Led full-cycle development as the sole developer, owning feature design, implementation, and deployment.',
      'Designed and implemented new UX/UI strategies to improve user experience and interface consistency.',
      'Developed and maintained scalable front-end features using React, TypeScript, and Ant Design.',
    ],
  },
  {
    company: 'Cloud Employee - Travelex',
    role: 'Senior Front-End Engineer',
    dates: 'Jun 2022 - Jan 2025',
    bullets: [
      'Integrated Apple Pay into the client checkout funnel, streamlining the payment process and enhancing the user experience.',
      'Led integration of Monetate across multi-region applications to track and analyze page performance.',
      'Built key pages using React, TypeScript, and Tailwind CSS with dynamic REST API data.',
      'Led the team to achieve WCAG 2.1 certification through accessibility improvements across new and legacy pages.',
      'Supported production releases, resolving frontend issues including analytics and third-party library conflicts.',
    ],
  },
  {
    company: 'Accenture - Marriott',
    role: 'Advanced App Engineering Sr Analyst',
    dates: 'Jun 2021 - Apr 2022',
    bullets: [
      'Redesigned and rebuilt the client dashboard from a legacy app to React.js for better performance and scalability.',
      'Developed unit tests to improve reliability and reduce production bugs.',
      'Contributed to rotational code reviews and managed Git workflows for consistent quality.',
    ],
  },
  {
    company: 'NCH Customer Support Service',
    role: 'Mid-Weight Web Developer',
    dates: 'Dec 2017 - Jun 2021',
    bullets: [
      'Developed promotional pages and site enhancements for a gaming website to meet brand requirements.',
      'Built an internal React + Node.js task management app similar to Jira for daily operations.',
      'Created an A/B test experience powered by Graphite AI REST API, contributing to an EGR Award win.',
    ],
  },
  {
    company: 'Goldridge Web Design',
    role: 'Web Developer',
    dates: 'Mar 2017 - Nov 2017',
    bullets: [
      'Built a client gaming website using HTML, CSS, and Bootstrap with a responsive UI.',
      'Converted PSDs into responsive HTML layouts and handled ongoing frontend updates.',
      'Collaborated with international clients to deliver globally aligned projects.',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Pokedex',
    description:
      'Built a responsive Pokedex web app using Next.js, React, TypeScript, Tailwind CSS, and PokeAPI. Implemented hybrid rendering, localized routes with next-intl, dynamic Pokemon detail pages, and tested core UI and hooks with Vitest + Testing Library.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Vitest', 'PokeAPI'],
    links: [
      { label: 'Live Demo', href: 'https://pokedex-two-beta-99.vercel.app/' },
      { label: 'GitHub Repo', href: 'https://github.com/remolalata/pokedex' },
    ],
    image: {
      src: pokedexImage,
      alt: 'Pokedex app interface screenshot',
    },
  },
  {
    name: 'CoWork Community Web App',
    description:
      'Built a community-focused coworking space web app using Next.js, TypeScript, and Tailwind CSS, translating a Figma design into a responsive, polished UI.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Live Demo', href: 'https://cowork-nine.vercel.app/' },
      { label: 'GitHub Repo', href: 'https://github.com/remolalata/cowork' },
    ],
    image: {
      src: coworkImage,
      alt: 'CoWork community web app landing page screenshot',
    },
  },
  {
    name: 'Shop.co',
    description:
      'A modern, responsive e-commerce frontend built with Next.js and React, translating a Figma design into a polished shopping experience backed by Firebase catalog data.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    links: [
      { label: 'Live Demo', href: 'https://shop-co-seven.vercel.app/' },
      { label: 'GitHub Repo', href: 'https://github.com/remolalata/shop.co' },
    ],
    image: {
      src: shopCoImage,
      alt: 'Shop.co ecommerce landing page screenshot',
    },
  },
  {
    name: 'Image Gallery Viewer',
    description:
      'React single-page app that fetches curated and searchable photos from the Pexels API and presents them in a masonry-style gallery with a hero search experience.',
    tags: ['React', 'Redux Toolkit', 'MUI', 'Pexels API'],
    links: [
      { label: 'Live Demo', href: 'https://image-gallery-viewer.vercel.app/' },
      { label: 'GitHub Repo', href: 'https://github.com/remolalata/image-gallery-viewer' },
    ],
    image: {
      src: imageGalleryView,
      alt: 'Image Gallery Viewer masonry gallery interface',
    },
  },
]

export const references: ReferenceItem[] = [
  {
    name: 'Jonas Diego',
    company: 'NCH Customer Support Service',
    role: 'Studio Manager',
    contact: '+63 917 827 2489',
  },
  {
    name: 'Maria Grigorova',
    company: 'NCH Customer Support Service',
    role: 'CX Manager',
    contact: 'margrigorova@gmail.com',
  },
  {
    name: 'Anthony Mapes',
    company: 'Travelex',
    role: 'Product Manager',
    contact: '+44 7545 328931',
  },
]
