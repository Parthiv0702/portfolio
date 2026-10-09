export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string | null;
    featured: boolean;
    category: string;
}

// NOTE: Replace with actual project data. All project details below are realistic placeholders.
export const projects: Project[] = [
    {
        id: 'task-management-app',
        title: 'Task Management App',
        shortDescription:
            'A full-featured task management application built with Angular and TypeScript, featuring real-time updates and REST API integration.',
        fullDescription:
            'A comprehensive task management application that allows teams to create, assign, and track tasks efficiently. Built with Angular 17 and TypeScript, it features a clean dashboard interface, drag-and-drop task reordering, priority labeling, deadline tracking, and REST API integration with a Node.js backend. The application uses Angular\'s reactive forms for validation and RxJS for state management.',
        technologies: ['Angular', 'TypeScript', 'REST API', 'SCSS', 'RxJS', 'Git'],
        githubUrl: '#', // Replace with actual GitHub URL
        liveUrl: null,
        featured: true,
        category: 'Web Application',
    },
    {
        id: 'ecommerce-frontend',
        title: 'E-Commerce Frontend',
        shortDescription:
            'A responsive e-commerce storefront built with Angular and SCSS, integrating product listing, cart, and checkout flows via REST APIs.',
        fullDescription:
            'A fully responsive e-commerce frontend application designed for seamless shopping experiences across all devices. Developed using Angular with SCSS for custom styling, the project features a dynamic product catalog with filtering and sorting, a persistent shopping cart using localStorage, a multi-step checkout flow, and REST API integration for product data and order management. Special attention was paid to performance optimization through lazy loading modules.',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Git', 'Responsive Design'],
        githubUrl: '#', // Replace with actual GitHub URL
        liveUrl: null,
        featured: true,
        category: 'Web Application',
    },
    {
        id: 'data-dashboard',
        title: 'Analytics Dashboard',
        shortDescription:
            'An interactive data analytics dashboard built with Angular and TypeScript, visualizing data from a MongoDB-backed REST API.',
        fullDescription:
            'An analytics dashboard application for visualizing business metrics and data trends. Built with Angular and TypeScript, the dashboard integrates with a MongoDB-backed REST API to display real-time charts, data tables, and KPI widgets. Features include date range filtering, exportable reports, and a responsive layout that adapts to different screen sizes. The project uses Angular Material components alongside custom SCSS theming.',
        technologies: ['Angular', 'TypeScript', 'MongoDB', 'REST API', 'SCSS', 'Charts'],
        githubUrl: '#', // Replace with actual GitHub URL
        liveUrl: null,
        featured: false,
        category: 'Data Visualization',
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        shortDescription:
            'This portfolio website — designed and built with Next.js and TypeScript for fast performance and professional presentation.',
        fullDescription:
            'A premium, dark-themed portfolio website built with Next.js 15 and TypeScript to showcase professional work, skills, and academic background. Features include a glassmorphism design system, smooth scroll animations with Intersection Observer, responsive layouts for all devices, SEO optimization with structured data, and a contact form. Built to serve as a professional presentation for both German university applications and potential employers.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CSS Animations', 'SEO'],
        githubUrl: '#', // Replace with actual GitHub URL
        liveUrl: '#', // Replace with actual live URL
        featured: true,
        category: 'Web Development',
    },
];