'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const curriculumAreas = [
    {
        area: 'Computer Programming & Software Development',
        subjects: ['Programming Methodology', 'Programming Skills', 'Java', '.NET', 'Unix & Shell Programming', 'Software Engineering'],
    },
    {
        area: 'Data & Databases',
        subjects: ['Object-Oriented Programming & Data Structures', 'RDBMS', 'Data Manipulation & Analysis', 'Database Handling using Python', 'Information Systems'],
    },
    {
        area: 'Web Technologies',
        subjects: ['Web Designing-II', 'Advanced Web Designing', 'Web Framework & Services', 'ASP.NET'],
    },
    {
        area: 'Computer Systems',
        subjects: ['Operating Systems-I', 'Network Technologies', 'Computer Graphics'],
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

const internSkills = [
    'Worked with HTML, CSS, JavaScript, and TypeScript for frontend development.',
    'Assisted in integrating REST APIs with Angular applications.',
    'Worked with Angular services, components, and data binding.',
    'Identified and fixed basic UI issues and frontend bugs.',
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
                    <span className="section-label">Education &amp; Training</span>
                    <h2 id="education-heading" className="text-section-heading text-foreground mt-2">
                        Academic <span className="text-gradient-blue">Background</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* 1. Bachelor of Computer Application */}
                    <div className="scroll-reveal-hidden glass-card rounded-2xl p-7 sm:p-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-bold text-xl">Bachelor of Computer Application</h3>
                                    <p className="text-accent font-semibold mt-1">Veer Narmad South Gujarat University</p>
                                    <div className="flex items-center gap-2 mt-1.5 text-muted-foreground text-sm flex-wrap">
                                        <Icon name="MapPinIcon" size={13} />
                                        <span>City: Surat | Country: India</span>
                                        <span>·</span>
                                        <a
                                            href="https://www.vnsgu.ac.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline flex items-center gap-1"
                                        >
                                            <Icon name="GlobeAltIcon" size={13} />
                                            Website: https://www.vnsgu.ac.in/
                                        </a>
                                        <span>·</span>
                                        <span>Level in EQF: EQF level 6</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm flex-shrink-0">
                                <Icon name="CalendarDaysIcon" size={14} />
                                <span>06/06/2022 – 15/04/2025</span>
                            </div>
                        </div>

                        <div className="divider-gradient mb-7" />

                        {/* Curriculum Areas */}
                        <div>
                            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                                Curriculum Areas
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {curriculumAreas.map((area) => (
                                    <div key={area.area} className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                        <p className="text-foreground text-sm font-semibold mb-2.5">{area.area}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {area.subjects.map((subj) => (
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
                                Practical Experience: <strong className="text-foreground">Major Project</strong>.
                            </p>
                        </div>
                    </div>

                    {/* 2. Angular Developer Intern (Education and Training in CV) */}
                    <div className="scroll-reveal-hidden glass-card rounded-2xl p-7 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name="BriefcaseIcon" size={24} className="text-accent" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-foreground font-bold text-xl">Angular Developer Intern</h3>
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                            Education and Training
                                        </span>
                                    </div>
                                    <p className="text-accent font-semibold mt-1">Tagline Infotech LLP</p>
                                    <div className="flex items-center gap-2 mt-1.5 text-muted-foreground text-sm">
                                        <Icon name="MapPinIcon" size={13} />
                                        <span>City: Surat | Country: India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm flex-shrink-0">
                                <Icon name="CalendarDaysIcon" size={14} />
                                <span>01/01/2025 – 30/06/2025</span>
                            </div>
                        </div>

                        <div className="divider-gradient mb-5" />

                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-3">
                            Main subject / occupational skills covered :
                        </p>
                        <ul className="space-y-2 mb-4">
                            {internSkills.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground-secondary text-sm leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Higher Secondary Education Certificate */}
                    <div className="scroll-reveal-hidden glass-card rounded-2xl p-7 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-bold text-xl">Higher Secondary Education Certificate</h3>
                                    <p className="text-accent font-semibold mt-1">
                                        SMT. V. D. N. Shah Sec. &amp; M. L. Patel &amp; SMT. D. M. Patel H. S. School
                                    </p>
                                    <div className="flex items-center gap-2 mt-1.5 text-muted-foreground text-sm">
                                        <Icon name="MapPinIcon" size={13} />
                                        <span>City: Surat | Country: India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm flex-shrink-0">
                                <Icon name="CalendarDaysIcon" size={14} />
                                <span>08/06/2020 – 31/05/2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
