import { Project } from '../types/types';
import coffee from '../assets/imgs/coffee-shop.png';
import event from '../assets/imgs/event-scheduling.png';
import movie from '../assets/imgs/movie-playlist.png';

export const projects: Project[] = [
  {
    title: 'Parish Event Scheduling System',
    description: 'An interactive calendar system with SMS notification for event scheduling with role-based access control.',
    features: [
      'Designed an interactive calendar using React and react-big-calendar',
      'Used PostgreSQL for structured event storage and retrieval',
      'Implemented role-based access control (RBAC) for admins and users',
      'Integrated ClickSend API for automated SMS notifications',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/wrom404/capstone',
    img: event
  },
  {
    title: 'Coffee Shop Website',
    description: 'A full-stack application for a coffee shop, allowing customers to browse products and place orders.',
    features: [
      'Developed the frontend with React, TypeScript, and TailwindCSS',
      'Designed a structured PostgreSQL database for product and order management',
      'Implemented a backend using Node.js and Express with RESTful APIs',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/wrom404/kofe-latte-shop',
    img: coffee
  },
  {
    title: 'Movie Playlist Website',
    description: 'A web application for managing and sharing favorite movies.',
    features: [
      'Built a responsive and user-friendly UI using React and TailwindCSS',
      'Implemented state management with Zustand for handling user interactions',
      'Integrated an API to fetch movie details dynamically',
    ],
    technologies: ['React', 'TailwindCSS', 'Zustand', 'REST API'],
    link: 'https://github.com/wrom404/movie-playlist',
    img: movie
  },
];