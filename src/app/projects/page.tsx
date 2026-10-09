import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsPageContent from '@/app/projects/components/ProjectsPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects — Parthiv Jogadiya',
    description:
        'A showcase of software development projects by Parthiv Jogadiya — Angular, TypeScript, REST APIs, and more.',
};

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen bg-background">
            <div className="noise-overlay" aria-hidden="true" />
            <Header />
            <ProjectsPageContent />
            <Footer />
        </main>
    );
}