export interface Project {
    id: string;
    title: string;
    date: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    githubUrl: string | null;
    liveUrl: string | null;
    featured: boolean;
    category: string;
}

export const projects: Project[] = [
    {
        id: 'cafe-management-system',
        title: 'Cafe Management System',
        date: 'Minor Project (BCA)',
        shortDescription:
            'Developed a cafe management system as a minor project during my BCA using React.js, Node.js, and MySQL with separate admin and user panels.',
        fullDescription:
            'Developed a cafe management system as a minor project during my BCA using React.js, Node.js, and MySQL. Implemented separate admin and user panels with features for menu management, user registration and login, food browsing, shopping cart, food ordering, table reservations, and customer feedback.',
        technologies: ['React.js', 'Node.js', 'MySQL'],
        githubUrl: null,
        liveUrl: null,
        featured: true,
        category: 'Academic Projects',
    },
    {
        id: 'launch-on-demand',
        title: 'Launch On Demand',
        date: '01/07/2025 – 30/06/2026',
        shortDescription:
            'Aerospace and commercial space services platform supporting launch operations, regulatory licensing, mission management, and spaceport technical services.',
        fullDescription:
            'Launch On Demand is an aerospace and commercial space services company that supports launch operations through regulatory licensing, mission management, and spaceport technical services. The company provides solutions for launch planning, safety coordination, weather monitoring, and launch integration to help make commercial space missions more efficient and reliable. I developed flight- and marine-related functionality and video capture functionality across the project during my work at Tagline Infotech LLP.',
        technologies: [
            'Angular',
            'TypeScript',
            'HTML5',
            'CSS3',
            'REST API',
        ],
        githubUrl: null,
        liveUrl: 'https://launchondemand.space/',
        featured: true,
        category: 'Commercial Projects',
    },
    {
        id: 'career-guidance-system',
        title: 'Career Guidance System',
        date: 'Major Project (BCA)',
        shortDescription:
            'A web-based Career Guidance System to connect students with professional career counsellors, built with HTML, CSS, JavaScript, Python (Flask), and SQLite.',
        fullDescription:
            'Developed a web-based Career Guidance System to connect students with professional career counsellors. Worked with HTML, CSS, JavaScript, Python (Flask), and SQLite to develop the application. Implemented features such as user registration, login, appointment booking, and profile management. The system also supports career resource sharing, feedback management, and appointment tracking. Participated in software testing and project documentation.',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Python (Flask)',
            'SQLite',
        ],
        githubUrl: 'https://github.com/utsavbhesaniya2005/CarrerNavigator',
        liveUrl: null,
        featured: true,
        category: 'Academic Projects',
    },
    {
        id: 'project-management-system',
        title: 'Project Management System (PMS)',
        date: 'Web Application',
        shortDescription:
            'A Project Management System (PMS) to simplify project organization, task tracking, and team collaboration with modern web technologies.',
        fullDescription:
            'Developed a Project Management System (PMS) to simplify project organization, task tracking, and team collaboration. The application helps users manage projects, monitor task progress, and keep project-related information organized in one place. Built with a modern web technology stack, the system focuses on usability, efficient workflow management, and a responsive user experience.',
        technologies: [
            'Angular',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'REST API',
        ],
        githubUrl: null,
        liveUrl: 'https://pms-workspace-hub.vercel.app/auth/login',
        featured: true,
        category: 'Technical Projects',
    },
];
