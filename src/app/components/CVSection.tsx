'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CVSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('scroll-reveal-visible');
                                el.classList.remove('scroll-reveal-hidden');
                            }, i * 120);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef?.current) observer?.observe(sectionRef?.current);
        return () => observer?.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="cv"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary/30"
            aria-labelledby="cv-heading"
        >
            <div className="max-w-5xl mx-auto">
                <div className="scroll-reveal-hidden mb-12">
                    <span className="section-label">Curriculum Vitae</span>
                    <h2 id="cv-heading" className="text-section-heading text-foreground mt-2">
                        Resume &amp; <span className="text-gradient-blue">CV</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* CV Preview — 3 cols */}
                    <div className="lg:col-span-3 scroll-reveal-hidden">
                        <div className="glass-card rounded-2xl p-6 sm:p-8 font-sans">
                            {/* CV Header */}
                            <div className="border-b border-white/10 pb-5 mb-5">
                                <h3 className="text-foreground font-bold text-2xl">Parthiv Jogadiya</h3>
                                <p className="text-accent text-sm font-semibold mt-1">Angular Developer</p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-muted-foreground text-xs">
                                    <span className="flex items-center gap-1"><Icon name="EnvelopeIcon" size={11} /> jogadiyaparthiv12@gmail.com</span>
                                    <span className="flex items-center gap-1"><Icon name="MapPinIcon" size={11} /> Surat, India</span>
                                    <span className="flex items-center gap-1"><Icon name="GlobeAltIcon" size={11} /> parthiv-jogadiya-portfolio.vercel.app</span>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="mb-5">
                                <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-3">Work Experience</p>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between flex-wrap gap-1">
                                            <span className="text-foreground text-sm font-semibold">Angular Developer</span>
                                            <span className="text-primary text-xs font-medium">01/07/2026 – Current</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Digipace Technologies Pvt. Ltd. – Vadodara, India</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between flex-wrap gap-1">
                                            <span className="text-foreground text-sm font-semibold">Angular Developer</span>
                                            <span className="text-muted-foreground text-xs">01/07/2025 – 30/06/2026</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP – Surat, India</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between flex-wrap gap-1">
                                            <span className="text-foreground text-sm font-semibold">Angular Developer Intern</span>
                                            <span className="text-muted-foreground text-xs">01/01/2025 – 30/06/2025</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP – Surat, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="mb-5">
                                <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-3">Education and Training</p>
                                <div className="flex justify-between flex-wrap gap-1">
                                    <div>
                                        <span className="text-foreground text-sm font-semibold">Bachelor of Computer Applications</span>
                                        <p className="text-accent text-xs font-medium mt-0.5">Veer Narmad South Gujrat University</p>
                                        <p className="text-muted-foreground text-xs mt-0.5">EQF Level 6 · Surat, India</p>
                                    </div>
                                    <span className="text-muted-foreground text-xs">01/07/2022 – 31/05/2025</span>
                                </div>
                            </div>

                            {/* Skills Preview */}
                            <div>
                                <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-3">Technical Skills</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'ReactJs', 'Next.js', 'Python', 'Java', 'PHP', 'SQL', 'MongoDB', 'Version Control (Git)', 'Data Structures']?.map((s) => (
                                        <span key={s} className="tech-badge">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Download Panel — 2 cols */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <div className="scroll-reveal-hidden glass-card rounded-2xl p-6 flex flex-col gap-5 flex-1">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon name="DocumentArrowDownIcon" size={24} className="text-primary" />
                            </div>
                            <div>
                                <h3 className="text-foreground font-bold text-lg mb-2">Download Full CV</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Download the complete curriculum vitae in PDF format matching all academic,
                                    work experience, project, and skill details.
                                </p>
                            </div>
                            <a
                                href="/cv/parthiv_jogadiya_resume.pdf"
                                download="parthiv_jogadiya_resume.pdf"
                                className="btn-primary px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 min-h-[44px]"
                            >
                                <Icon name="ArrowDownTrayIcon" size={18} />
                                Download CV (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}