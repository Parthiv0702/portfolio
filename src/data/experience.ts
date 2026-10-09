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
        role: 'Angular Developer Intern',
        company: 'Tagline Infotech LLP',
        location: 'Surat, India',
        startDate: 'January 2025',
        endDate: 'June 2025',
        current: false,
        description: [
            'Developed responsive web applications using Angular and TypeScript',
            'Designed and implemented reusable UI components to improve development efficiency',
            'Integrated REST APIs to connect frontend interfaces with backend services',
            'Handled bug fixing and application functionality improvements',
            'Used Git for version control and collaborated with the development team',
        ],
        skills: ['Angular', 'TypeScript', 'REST APIs', 'Git'],
    },
    {
        id: 2,
        role: 'Angular Developer',
        company: 'Tagline Infotech LLP',
        location: 'Surat, India',
        startDate: 'July 2025',
        endDate: 'June 2026',
        current: true,
        description: [
            'Developed and maintained responsive web applications using Angular and TypeScript',
            'Designed and implemented reusable UI component libraries',
            'Integrated REST APIs and managed complex application state with RxJS',
            'Handled application functionality improvements and systematic bug fixing',
            'Used Git for version control and code review workflows',
            'Collaborated with cross-functional teams to implement new product features',
            'Improved application performance through code optimization and lazy loading',
            'Resolved technical issues and provided solutions to complex frontend challenges',
        ],
        skills: ['Angular', 'TypeScript', 'REST APIs', 'Git', 'SCSS', 'RxJS'],
    },
];