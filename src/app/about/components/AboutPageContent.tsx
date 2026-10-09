'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ProfileImageFrame from '@/components/ui/ProfileImageFrame';

const languages = [
    { name: 'Gujarati', level: 'Mother Tongue', proficiency: 'Native' },
    { name: 'English', level: 'Professional Working', proficiency: 'Fluent' },
    { name: 'Hindi', level: 'Professional Working', proficiency: 'Fluent' },
];

const interests = [
    { icon: 'CodeBracketIcon', label: 'Software Development', desc: 'Building clean, performant web applications with modern frameworks' },
    { icon: 'CpuChipIcon', label: 'Artificial Intelligence', desc: 'Interest in ML, deep learning, and AI-driven software systems' },
    { icon: 'GlobeAltIcon', label: 'International Education', desc: 'Pursuing academic excellence in Germany\'s top CS programs' },
    { icon: 'PuzzlePieceIcon', label: 'Problem Solving', desc: 'Tackling complex technical challenges with structured thinking' },
];

export default function AboutPageContent() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('scroll-reveal-visible');
                                el.classList.remove('scroll-reveal-hidden');
                            }, i * 80);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = pageRef.current?.querySelectorAll('section');
        sections?.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={pageRef} className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Page Hero */}
                <section className="py-16">
                    <div className="scroll-reveal-hidden">
                        <span className="section-label">About Me</span>
                        <h1 className="text-section-heading text-foreground mt-2 mb-4">
                            Parthiv <span className="text-gradient-blue">Jogadiya</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                            Angular Developer · BCA Graduate · Aspiring AI Specialist · Surat, India
                        </p>
                    </div>
                </section>

                {/* Background Story */}
                <section className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 space-y-5">
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="UserCircleIcon" size={22} className="text-primary" />
                                    Background
                                </h2>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-4">
                                    I was born on 7 December 2004 in Surat, India — a city known for its industrial energy
                                    and growing technology sector. I completed my Bachelor of Computer Applications (BCA) at
                                    Veer Narmad South Gujarat University between July 2022 and May 2025, earning an EQF Level 6
                                    qualification.
                                </p>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                                    My undergraduate studies gave me a broad foundation in computer science — from programming
                                    fundamentals and data structures to web technologies, databases, operating systems, and
                                    networking. The Major Project component allowed me to apply these skills in a structured,
                                    real-world context.
                                </p>
                            </div>

                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="BriefcaseIcon" size={22} className="text-primary" />
                                    Professional Experience
                                </h2>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-4">
                                    Since January 2025, I have been working at Tagline Infotech LLP in Surat — first as an
                                    Angular Developer Intern (January–June 2025) and subsequently as an Angular Developer
                                    (July 2025 onwards). This experience has been formative: I work daily with Angular 17 and
                                    TypeScript, building and maintaining responsive web applications, integrating REST APIs,
                                    and collaborating in a professional development team.
                                </p>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                                    The role has strengthened my understanding of component architecture, reactive programming
                                    with RxJS, version control workflows with Git, and the practical realities of delivering
                                    software in a professional environment.
                                </p>
                            </div>

                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="RocketLaunchIcon" size={22} className="text-primary" />
                                    Future Goals
                                </h2>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-4">
                                    My long-term ambition is to become a software engineer specializing in AI and machine
                                    learning technologies. I believe that the intersection of strong software engineering
                                    fundamentals and AI expertise is where the most impactful work of the next decade will happen.
                                </p>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                                    To pursue this goal, I am currently preparing applications for Master's programs in Computer Science at universities in Germany. Germany's reputation for rigorous engineering
                                    education, its strong research output in AI, and the international environment of its
                                    universities make it the right destination for this next stage of my development.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-5">
                            {/* Profile Photo Frame */}
                            <div className="scroll-reveal-hidden">
                                <ProfileImageFrame src="/assets/images/parthiv.jpeg" alt="Parthiv Jogadiya" />
                            </div>

                            {/* Personal Details */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                                <h3 className="text-foreground font-bold text-base mb-4">Personal Details</h3>
                                <div className="space-y-3 text-sm">
                                    {[
                                        { label: 'Full Name', value: 'Parthiv Jogadiya' },
                                        { label: 'Date of Birth', value: '07 December 2004' },
                                        { label: 'Nationality', value: 'Indian' },
                                        { label: 'Location', value: 'Surat, India' },
                                        { label: 'Postal Code', value: '395004' },
                                    ].map((item) => (
                                        <div key={item.label} className="flex flex-col gap-0.5">
                                            <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">{item.label}</span>
                                            <span className="text-foreground-secondary font-medium">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                                <h3 className="text-foreground font-bold text-base mb-4 flex items-center gap-2">
                                    <Icon name="LanguageIcon" size={18} className="text-primary" />
                                    Languages
                                </h3>
                                <div className="space-y-3">
                                    {languages.map((lang) => (
                                        <div key={lang.name} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-foreground-secondary text-sm font-medium">{lang.name}</p>
                                                <p className="text-muted-foreground text-xs">{lang.level}</p>
                                            </div>
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                                {lang.proficiency}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                                <h3 className="text-foreground font-bold text-base mb-4">Quick Links</h3>
                                <div className="space-y-2">
                                    <Link
                                        href="/projects"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 min-h-[44px] px-2 rounded-lg hover:bg-white/5"
                                    >
                                        <Icon name="FolderOpenIcon" size={15} />
                                        View Projects
                                    </Link>
                                    <Link
                                        href="/#experience"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 min-h-[44px] px-2 rounded-lg hover:bg-white/5"
                                    >
                                        <Icon name="BriefcaseIcon" size={15} />
                                        Work Experience
                                    </Link>
                                    <a
                                        href="/cv/parthiv_jogadiya_resume.pdf"
                                        download="parthiv_jogadiya_resume.pdf"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 min-h-[44px] px-2 rounded-lg hover:bg-white/5"
                                    >
                                        <Icon name="ArrowDownTrayIcon" size={15} />
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interests */}
                <section className="py-12">
                    <div className="scroll-reveal-hidden mb-8">
                        <h2 className="text-foreground font-bold text-2xl">Interests &amp; Focus Areas</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {interests.map((item, i) => (
                            <div
                                key={item.label}
                                className="scroll-reveal-hidden glass-card rounded-xl p-5 card-hover flex items-start gap-4"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name={item.icon as any} size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold text-sm mb-1">{item.label}</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-12">
                    <div className="scroll-reveal-hidden glass-card rounded-2xl p-8 sm:p-10 text-center border border-primary/10">
                        <h2 className="text-foreground font-bold text-2xl mb-3">Interested in Working Together?</h2>
                        <p className="text-muted-foreground text-sm mb-7 max-w-md mx-auto">
                            Open to collaborations, academic discussions, and professional opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/#contact"
                                className="btn-primary px-7 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 min-h-[44px]"
                            >
                                <Icon name="EnvelopeIcon" size={18} />
                                Get In Touch
                            </Link>
                            <Link
                                href="/projects"
                                className="btn-secondary px-7 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 min-h-[44px]"
                            >
                                <Icon name="FolderOpenIcon" size={18} />
                                View Projects
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}