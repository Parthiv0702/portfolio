export interface SkillCategory {
    id: string;
    category: string;
    icon: string;
    skills: string[];
    accentColor: string;
}

// Exact skills in the order managed in the CV:
// Javascript / CSS / Java / Python / Angular / Typescript / HTML / PHP / React.js / SQL / Next.js / MongoDB / Version Control (Git)
export const cvSkills: string[] = [
    'Javascript',
    'CSS',
    'Java',
    'Python',
    'Angular',
    'Typescript',
    'HTML',
    'PHP',
    'React.js',
    'SQL',
    'Next.js',
    'MongoDB',
    'Version Control (Git)',
];

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        category: 'Frontend & Frameworks',
        icon: 'ComputerDesktopIcon',
        skills: ['Angular', 'React.js', 'Next.js', 'Typescript', 'Javascript', 'HTML', 'CSS'],
        accentColor: '#06B6D4',
    },
    {
        id: 'programming',
        category: 'Programming Languages',
        icon: 'CodeBracketIcon',
        skills: ['Javascript', 'Typescript', 'Java', 'Python', 'PHP'],
        accentColor: '#3B82F6',
    },
    {
        id: 'databases',
        category: 'Databases & Systems',
        icon: 'CircleStackIcon',
        skills: ['SQL', 'MongoDB'],
        accentColor: '#10B981',
    },
    {
        id: 'tools',
        category: 'Version Control & Tools',
        icon: 'WrenchScrewdriverIcon',
        skills: ['Version Control (Git)'],
        accentColor: '#F59E0B',
    },
];

export interface LanguageAssessment {
    language: string;
    type: 'Mother tongue' | 'Other language';
    listening?: string;
    reading?: string;
    spokenInteraction?: string;
    spokenProduction?: string;
    writing?: string;
}

export const languageSkills: {
    motherTongues: string[];
    otherLanguages: LanguageAssessment[];
} = {
    motherTongues: ['Gujarati', 'Hindi'],
    otherLanguages: [
        {
            language: 'English',
            type: 'Other language',
            listening: 'C1',
            reading: 'C1',
            spokenInteraction: 'B2',
            spokenProduction: 'B2',
            writing: 'B2',
        },
        {
            language: 'German',
            type: 'Other language',
            listening: 'A1',
            reading: 'A1',
            spokenInteraction: 'A1',
            spokenProduction: 'A1',
            writing: 'A1',
        },
    ],
};

export const interpersonalSkills = {
    communication: ['Public Speaking', 'Team Leadership', 'Active Listening'],
    organisational: ['Multitasking Abilities', 'Innovative Workflow Management', 'Time Management'],
};

export const hobbiesAndInterests = {
    hobbies: ['Listening to music', 'Playing Badminton', 'Travelling'],
    areaOfInterests: [
        'Digital technology & innovation',
        'Data science for business analytics',
        'AI technologies for business development',
        'IT management',
    ],
};
