export interface SkillCategory {
    id: string;
    category: string;
    icon: string;
    skills: string[];
    accentColor: string;
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        category: 'Frontend & Web Development',
        icon: 'ComputerDesktopIcon',
        skills: [
            'Angular',
            'ReactJs',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'SCSS',
            'Web Designing',
            'Web Programming',
        ],
        accentColor: '#06B6D4',
    },
    {
        id: 'programming',
        category: 'Programming Languages',
        icon: 'CodeBracketIcon',
        skills: [
            'JavaScript',
            'TypeScript',
            'Java (Computer Programming)',
            'Python (Computer Programming)',
            'PHP',
        ],
        accentColor: '#3B82F6',
    },
    {
        id: 'core-cs',
        category: 'Core Computer Science',
        icon: 'CpuChipIcon',
        skills: [
            'Data Structures and Algorithms',
            'Object-Oriented Programming (OOP)',
            'Computer Programming',
        ],
        accentColor: '#8B5CF6',
    },
    {
        id: 'databases',
        category: 'Databases & Systems',
        icon: 'CircleStackIcon',
        skills: ['SQL', 'MongoDB', 'Database Management Systems'],
        accentColor: '#10B981',
    },
    {
        id: 'tools',
        category: 'Tools & Version Control',
        icon: 'WrenchScrewdriverIcon',
        skills: ['Version Control (Git)', 'Git'],
        accentColor: '#F59E0B',
    },
    {
        id: 'soft-skills',
        category: 'Soft Skills',
        icon: 'SparklesIcon',
        skills: [
            'Communication',
            'Problem-Solving',
            'Think Critically',
            'Work as a Team',
            'Adapt to Change',
            'Time Management',
        ],
        accentColor: '#EC4899',
    },
];

export const softSkills: string[] = [
    'Communication',
    'Problem-Solving',
    'Think Critically',
    'Work as a Team',
    'Adapt to Change',
    'Time Management',
];