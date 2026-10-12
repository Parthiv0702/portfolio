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
        id: 'portfolio-website',
        title: 'Portfolio Website',
        shortDescription:
            'A responsive personal portfolio built with Next.js to showcase professional experience, technical skills, and projects, with easy access to my CV.',
        fullDescription:
            'Designed and developed a personal portfolio website using Next.js to present my professional profile, technical expertise, work experience, and development projects. Created a clean, responsive, and user-friendly interface to ensure a consistent experience across different devices. Integrated access to my CV and deployed the website on Vercel to establish a professional online presence.',
        technologies: ['Next.js', 'TypeScript', 'React', 'CSS', 'Vercel'],
        githubUrl: '#', // Replace with your actual GitHub repository URL
        liveUrl: 'https://parthiv-jogadiya-portfolio.vercel.app/',
        featured: true,
        category: 'Web Development',
    },
    {
        id: 'project-management-system',
        title: 'Project Management System (PMS)',
        shortDescription:
            'A full-stack project management application designed to organize projects, track tasks, monitor progress, and streamline team collaboration.',
        fullDescription:
            'Developed a Project Management System to simplify project organization, task tracking, and team collaboration. The application helps users manage projects, organize tasks, monitor progress, and maintain project-related information in one place. Built using Angular for the frontend and Node.js, Express.js, and MongoDB for the backend and data management. Focused on creating a responsive user interface and a structured workflow for efficient project management.',
        technologies: [
            'Angular',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'REST API',
        ],
        githubUrl: '#', // Replace with your actual GitHub repository URL
        liveUrl: 'https://pms-workspace-hub.vercel.app/dashboard',
        featured: true,
        category: 'Full-Stack Web Application',
    },
    {
        id: 'promoprep',
        title: 'Promoprep',
        shortDescription:
            'A company-wide task and activity management platform featuring daily reminders, progress tracking, and downloadable performance reports.',
        fullDescription:
            'Contributed to the development of Promoprep, a task and activity management system designed to streamline daily business operations across different organizational levels. Developed major administrative functionalities using Angular, enabling users to manage activities, organize daily tasks, configure reminders, and monitor progress. The platform also supports company heads in reviewing activity performance, analyzing business growth, and downloading reports for specific months or years to support data-driven decision-making.',
        technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'REST API',
        ],
        githubUrl: '#', // Private/company project, if applicable
        liveUrl: 'https://promoprep.com/',
        featured: true,
        category: 'Enterprise Web Application',
    },
    {
        id: 'launch-on-demand',
        title: 'Launch On Demand',
        shortDescription:
            'An aerospace and commercial space services platform supporting launch operations, flight and marine functionality, and video capture features.',
        fullDescription:
            'Contributed to the development of Launch On Demand, a platform providing aerospace and commercial space services related to launch operations, regulatory licensing, mission management, and technical coordination. Worked as an Angular developer at Tagline Infotech LLP, developing flight-related and marine-related functionalities as well as video capture features across the project. Collaborated within the development workflow to implement project requirements and enhance the platform’s functionality.',
        technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'REST API',
        ],
        githubUrl: '#', // Private/company project, if applicable
        liveUrl: 'https://launchondemand.space/',
        featured: true,
        category: 'Aerospace Web Application',
    },
];