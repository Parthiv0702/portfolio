
'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const curriculumAreas = [
    {
        area: 'Programming & Software Development',
        subjects: ['Programming Methodology', 'Java', '.NET', 'Unix & Shell Programming', 'Software Engineering'],
    },
    {
        area: 'Data & Databases',
        subjects: ['OOP & Data Structures', 'RDBMS', 'Database Handling with Python', 'Information Systems'],
    },
    {
        area: 'Web Technologies',
        subjects: ['Web Designing', 'Advanced Web Designing', 'Web Framework & Services', 'ASP.NET'],
    },
    {
        area: 'Computer Systems',
        subjects: ['Operating Systems', 'Network Technologies', 'Computer Graphics'],
    },
    {
        area: 'Emerging Technologies',
        subjects: ['Internet of Things (IoT)', 'E-Commerce & Cyber Security'],
    },
    {
        area: 'Mathematics & Statistics',
        subjects: ['Mathematics', 'Statistical Methods'],
    },
];

export default function EducationSection() {
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
                            }, i * 100);
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
            id="education"
            className="py-24 px-4 sm:px-6 lg:px-8"
            aria-labelledby="education-heading"
        >
            <div className="max-w-5xl mx-auto">
                <div className="scroll-reveal-hidden mb-12">
                    <span className="section-label">Education</span>
                    <h2 id="education-heading" className="text-section-heading text-foreground mt-2">
                        Academic <span className="text-gradient-blue">Background</span>
                    </h2>
                </div>

                {/* Main Education Card */}
                <div className="scroll-reveal-hidden glass-card rounded-2xl p-7 sm:p-10 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                            </div>
                            <div>
                                <h3 className="text-foreground font-bold text-xl">Bachelor of Computer Applications</h3>
                                <p className="text-accent font-semibold mt-1">Veer Narmad South Gujarat University</p>
                                <div className="flex items-center gap-2 mt-1.5 text-muted-foreground text-sm flex-wrap">
                                    <Icon name="MapPinIcon" size={13} />
                                    <span>Surat, India</span>
                                    <span>·</span>
                                    <span>EQF Level 6</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm flex-shrink-0">
                            <Icon name="CalendarDaysIcon" size={14} />
                            <span>July 2022 — May 2025</span>
                        </div>
                    </div>

                    <div className="divider-gradient mb-7" />

                    {/* Curriculum Areas */}
                    <div>
                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                            Curriculum Areas
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {curriculumAreas?.map((area) => (
                                <div key={area?.area} className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                    <p className="text-foreground text-sm font-semibold mb-2.5">{area?.area}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {area?.subjects?.map((subj) => (
                                            <span key={subj} className="px-2 py-0.5 rounded-full text-xs text-muted-foreground bg-white/5 border border-white/5">
                                                {subj}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <Icon name="DocumentTextIcon" size={18} className="text-primary flex-shrink-0" />
                        <p className="text-sm text-foreground-secondary">
                            Completed a <strong className="text-foreground">Major Project</strong> as part of the BCA program, applying software engineering concepts in a practical setting.
                        </p>
                    </div>
                </div>

                {/* Future Education Goal */}
                <div className="scroll-reveal-hidden glass-card rounded-2xl p-6 sm:p-8 border border-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="GlobeAltIcon" size={20} className="text-primary" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-foreground font-bold text-lg">Next Step: Master's in Computer Science</h3>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                                    In Progress
                                </span>
                            </div>
                            <p className="text-accent font-semibold text-sm mt-1">Germany — Target 2026</p>
                            <p className="text-foreground-secondary text-sm leading-relaxed mt-3">
                                Currently preparing applications for Master's programs in Computer Science at German universities.
                                Focused on programs with strong AI, machine learning, and software engineering tracks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}