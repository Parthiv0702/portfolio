export interface SkillCategory {
    id: string;
    category: string;
    icon: string;
    skills: string[];
    accentColor: string;
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'programming',
        category: 'Programming Languages',
        icon: 'CodeBracketIcon',
        skills: ['JavaScript', 'TypeScript', 'Java', 'Python'],
        accentColor: '#3B82F6',
    },
    {
        id: 'frontend',
        category: 'Frontend',
        icon: 'ComputerDesktopIcon',
        skills: ['HTML5', 'CSS3', 'SCSS'],
        accentColor: '#06B6D4',
    },
    {
        id: 'frameworks',
        category: 'Frameworks & Libraries',
        icon: 'CubeIcon',
        skills: ['Angular', 'ReactJS'],
        accentColor: '#8B5CF6',
    },
    {
        id: 'databases',
        category: 'Databases',
        icon: 'CircleStackIcon',
        skills: ['MySQL', 'MongoDB'],
        accentColor: '#10B981',
    },
    {
        id: 'tools',
        category: 'Tools & Version Control',
        icon: 'WrenchScrewdriverIcon',
        skills: ['Git', 'Version Control'],
        accentColor: '#F59E0B',
    },
    {
        id: 'other',
        category: 'Other Technologies',
        icon: 'SparklesIcon',
        skills: ['REST APIs', 'Web Services', 'Responsive Design', 'Software Engineering'],
        accentColor: '#EC4899',
    },
];