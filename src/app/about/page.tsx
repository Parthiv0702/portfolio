import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPageContent from '@/app/about/components/AboutPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About — Parthiv Jogadiya',
    description:
        'Learn about Parthiv Jogadiya — Angular Developer at Elpiora Tech Solutions Pvt. Ltd., BCA graduate from Veer Narmad South Gujarat University, work experience, education, and skills.',
};

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-background">
            <div className="noise-overlay" aria-hidden="true" />
            <Header />
            <AboutPageContent />
            <Footer />
        </main>
    );
}
