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
        company: 'Elpiora Tech Solutions Pvt. Ltd.',
        location: 'Surat, India',
        startDate: '01/07/2026',
        endDate: 'Current',
        current: true,
        description: [
            'Develop and maintain responsive web applications using Angular, TypeScript, HTML5, and CSS3.',
            'Build reusable components and services to ensure maintainable and scalable application development.',
            'Collaborate with team members to understand requirements and deliver effective technical solutions.',
            'Implement Angular routing, form validation, data binding, and interactive user interfaces.',
        ],
        skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Routing', 'Form Validation', 'Data Binding'],
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
            'Developed and maintained web application user interfaces using Angular, TypeScript, HTML5, and CSS3.',
            'Collaborated with backend developers, UI/UX designers, and team members to deliver application features.',
            'Maintained code quality and followed established development standards.',
            'Participated in application enhancements, code maintenance, and performance improvements.',
        ],
        skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'UI/UX Collaboration', 'Code Quality', 'Performance Improvement'],
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
            'Worked with HTML, CSS, JavaScript, and TypeScript for frontend development.',
            'Assisted in integrating REST APIs with Angular applications.',
            'Worked with Angular services, components, and data binding.',
            'Identified and fixed basic UI issues and frontend bugs.',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'REST APIs', 'Components & Services', 'Bug Fixing'],
    },
];
