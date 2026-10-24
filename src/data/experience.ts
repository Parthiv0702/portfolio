export interface Experience {
    id: number;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
    skills: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: 'Angular Developer',
        company: 'Digipace Technologies Pvt. Ltd.',
        location: 'Vadodara, India',
        startDate: '01/07/2026',
        endDate: 'Current',
        current: true,
        description: [
            'Working as an Angular Developer at Digipace Technologies Pvt. Ltd. since 1 July 2026',
            'Developing and maintaining web application features using various technologies',
            'Building responsive user interfaces and integrating REST APIs',
            'Debugging and resolving issues, and testing application functionality',
            'Collaborating with senior developers to improve code quality and application performance',
        ],
        skills: ['Angular', 'TypeScript', 'REST APIs', 'UI Development', 'Testing', 'Debugging'],
    },
    {
        id: 2,
        role: 'Angular Developer',
        company: 'Tagline Infotech LLP',
        location: 'Surat, India',
        startDate: '01/07/2025',
        endDate: '30/06/2026',
        current: false,
        description: [
            'Developed and maintained responsive web applications using Angular and TypeScript',
            'Designed and implemented reusable UI components and integrated REST APIs',
            'Handled application functionality and bug fixing',
            'Worked with Git for version control',
            'Collaborated with team members to implement new features, improve application performance, and resolve technical issues',
        ],
        skills: ['Angular', 'TypeScript', 'REST APIs', 'Git', 'SCSS', 'UI Components'],
    },
    {
        id: 3,
        role: 'Angular Developer Intern',
        company: 'Tagline Infotech LLP',
        location: 'Surat, India',
        startDate: '01/01/2025',
        endDate: '30/06/2025',
        current: false,
        description: [
            'Learned about basics and advance fundamentals of Angular',
            'Gained many additional essential soft skills and collaborated in an agile engineering team',
        ],
        skills: ['Angular', 'TypeScript', 'Git', 'Soft Skills', 'Web Programming'],
    },
];