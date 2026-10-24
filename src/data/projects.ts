export interface Project {
    id: string;
    title: string;
    date: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string | null;
    featured: boolean;
    category: string;
}

export const projects: Project[] = [
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        date: '01/10/2026 – 08/10/2026',
        shortDescription:
            'A personal portfolio website built using Next.js to showcase technical skills, professional experience, and projects.',
        fullDescription:
            'Designed and developed a personal portfolio website using Next.js to showcase my technical skills, professional experience, and projects. Created a clean, responsive, and user-friendly interface to present my work and make my CV easily accessible. Deployed the website on Vercel to establish a professional online presence and demonstrate my web development capabilities.',
        technologies: ['Next.js', 'ReactJs', 'TypeScript', 'CSS', 'HTML', 'Vercel'],
        githubUrl: 'https://github.com/Parthiv0702',
        liveUrl: 'https://parthiv-jogadiya-portfolio.vercel.app/',
        featured: true,
        category: 'Web Development',
    },
    {
        id: 'project-management-system',
        title: 'Project Management System (PMS)',
        date: '01/01/2026 – 10/06/2026',
        shortDescription:
            'A Project Management System (PMS) to simplify project organization, task tracking, and team collaboration.',
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
        githubUrl: 'https://github.com/Parthiv0702',
        liveUrl: 'https://pms-workspace-hub.vercel.app/auth/login',
        featured: true,
        category: 'Full-Stack Web Application',
    },
    {
        id: 'career-guidance-system',
        title: 'Career Guidance System',
        date: '01/01/2025 – 16/04/2025',
        shortDescription:
            'A career guidance website developed as a final-year major project during BCA, connecting students with counsellors and resources.',
        fullDescription:
            'Developed a career guidance website as my final-year major project during my BCA. Built using HTML, CSS, JavaScript, Python (Flask), and SQLite, the platform helps students connect with career counsellors, book appointments, and access career-related resources. I also worked on features for managing student profiles, counsellors, appointments, and feedback.',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Python (Flask)',
            'SQLite',
        ],
        githubUrl: 'https://github.com/utsavbhesaniya2005/CarrerNavigator',
        liveUrl: 'https://github.com/utsavbhesaniya2005/CarrerNavigator',
        featured: true,
        category: 'Major Project / Web Application',
    },
    {
        id: 'launch-on-demand',
        title: 'Launch On Demand',
        date: '01/07/2025 – 30/06/2026',
        shortDescription:
            'Aerospace and commercial space services platform supporting launch operations, regulatory licensing, and mission management.',
        fullDescription:
            'Launch On Demand is an aerospace and commercial space services company that supports launch operations through regulatory licensing, mission management, and spaceport technical services. The company provides solutions for launch planning, safety coordination, weather monitoring, and launch integration to help make commercial space missions more efficient and reliable. I developed flight and marine related functionality and videocapture functionality across the project during my work in Tagline infotech LLP.',
        technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'REST API',
        ],
        githubUrl: 'https://github.com/Parthiv0702',
        liveUrl: 'https://launchondemand.space/',
        featured: true,
        category: 'Commercial Web Application',
    },
];