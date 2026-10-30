'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { cvSkills } from '@/data/skills';

export default function HeroSection() {
    const blobRef1 = useRef<HTMLDivElement>(null);
    const blobRef2 = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const moveX = (clientX - centerX) / centerX;
            const moveY = (clientY - centerY) / centerY;

            if (blobRef1.current) {
                blobRef1.current.style.transform = `translate(${moveX * 30}px, ${moveY * 20}px)`;
            }
            if (blobRef2.current) {
                blobRef2.current.style.transform = `translate(${moveX * -20}px, ${moveY * -15}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mounted]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-20 pb-12 overflow-hidden"
            aria-label="Hero section"
        >
            {/* Animated Background Blobs */}
            <div
                ref={blobRef1}
                className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] hero-blob-1 rounded-full pointer-events-none blob-animate-1"
                style={{ transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                aria-hidden="true"
            />
            <div
                ref={blobRef2}
                className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] hero-blob-2 rounded-full pointer-events-none blob-animate-2"
                style={{ transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                aria-hidden="true"
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] hero-blob-3 rounded-full pointer-events-none"
                aria-hidden="true"
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none animate-grid-fade"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up stagger-1">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="section-label">Angular Developer · Surat, India</span>
                </div>

                {/* Headline */}
                <h1 className="text-hero-xl text-foreground mb-6 animate-fade-in-up stagger-2">
                    <span className="block">Parthiv</span>
                    <span className="text-gradient-blue">Jogadiya</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg font-semibold tracking-widest text-muted-foreground uppercase mb-6 animate-fade-in-up stagger-3">
                    Angular Developer&nbsp;&nbsp;·&nbsp;&nbsp;BCA Graduate&nbsp;&nbsp;·&nbsp;&nbsp;Web Developer
                </p>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-up stagger-4">
                    Angular Developer at Elpiora Tech Solutions Pvt. Ltd. and BCA graduate from Veer Narmad South Gujarat University. Experienced in developing responsive web applications, reusable UI components, and REST API integrations with prior development experience at Tagline Infotech LLP.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up stagger-5">
                    <Link
                        href="/projects"
                        className="btn-primary px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 min-h-[44px]"
                    >
                        <Icon name="FolderOpenIcon" size={18} />
                        Explore My Work
                    </Link>
                    <a
                        href="/cv/parthiv_jogadiya_resume.pdf"
                        download
                        className="btn-secondary px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 min-h-[44px]"
                    >
                        <Icon name="ArrowDownTrayIcon" size={18} />
                        Download CV
                    </a>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn-secondary px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 min-h-[44px]"
                    >
                        <Icon name="EnvelopeIcon" size={18} />
                        Contact Me
                    </button>
                </div>

                {/* Tech Stack Row - in exact order from CV */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-2 animate-fade-in-up stagger-6">
                    {cvSkills.map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-6">
                <span className="section-label opacity-50">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
                <Icon name="ChevronDownIcon" size={16} className="text-muted-foreground animate-float" />
            </div>
        </section>
    );
}
