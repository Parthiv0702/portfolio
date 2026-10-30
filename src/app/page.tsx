import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import EducationSection from '@/app/components/EducationSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import CVSection from '@/app/components/CVSection';
import ContactSection from '@/app/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Parthiv Jogadiya — Angular Developer & BCA Graduate',
    description:
        'Portfolio of Parthiv Jogadiya — Angular Developer at Elpiora Tech Solutions Pvt. Ltd., formerly at Tagline Infotech LLP, and BCA graduate from Veer Narmad South Gujarat University.',
    openGraph: {
        title: 'Parthiv Jogadiya — Angular Developer',
        description: 'Angular Developer at Elpiora Tech Solutions Pvt. Ltd. and BCA graduate.',
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
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <CVSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
