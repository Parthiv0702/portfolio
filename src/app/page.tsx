import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import EducationSection from '@/app/components/EducationSection';
import CVSection from '@/app/components/CVSection';
import ContactSection from '@/app/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Parthiv Jogadiya — Angular Developer & CS Graduate',
    description:
        'Portfolio of Parthiv Jogadiya — Angular Developer and BCA graduate from Surat, India, preparing for a Master\'s in Computer Science in Germany.',
    openGraph: {
        title: 'Parthiv Jogadiya — Angular Developer',
        description: 'BCA graduate and Angular Developer preparing for MS in CS in Germany.',
        images: [{ url: '/assets/images/app_logo.jpg', width: 1200, height: 630 }],
    },
};

export default function HomePage() {
    return (
        <main className="relative min-h-screen bg-background">
            <div className="noise-overlay" aria-hidden="true" />
            <Header />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <CVSection />
            <ContactSection />
            <Footer />
        </main>
    );
}