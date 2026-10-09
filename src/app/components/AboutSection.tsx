'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProfileImageFrame from '@/components/ui/ProfileImageFrame';

const highlights = [
    { icon: 'AcademicCapIcon', label: 'BCA Graduate', value: 'Veer Narmad South Gujarat University' },
    { icon: 'MapPinIcon', label: 'Based In', value: 'Surat, India' },
    { icon: 'LanguageIcon', label: 'Languages', value: 'Gujarati, English, Hindi' },
    { icon: 'GlobeAltIcon', label: 'Goal', value: 'MS in CS — Germany' },
];

export default function AboutSection() {
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
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
            aria-labelledby="about-heading"
        >
            <div className="max-w-7xl mx-auto">
                <div className="scroll-reveal-hidden mb-12">
                    <span className="section-label">About Me</span>
                    <h2 id="about-heading" className="text-section-heading text-foreground mt-2">
                        Building Software,{' '}
                        <span className="text-gradient-blue">Shaping the Future</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Profile Picture Frame Area — 5 cols */}
                    <div className="lg:col-span-5 flex justify-center scroll-reveal-hidden">
                        <ProfileImageFrame src="/assets/images/parthiv.jpeg" alt="Parthiv Jogadiya" />
                    </div>

                    {/* Text Content & Highlights — 7 cols */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                            <h3 className="text-foreground font-bold text-xl mb-3 flex items-center gap-2">
                                <Icon name="UserCircleIcon" size={22} className="text-primary" />
                                Who I Am
                            </h3>
                            <p className="text-foreground-secondary leading-relaxed text-base">
                                I am a BCA graduate from Veer Narmad South Gujarat University, Surat, with a genuine
                                passion for software development and building things that work well. My journey into
                                programming began during my undergraduate studies, where I developed a strong foundation
                                across computer science fundamentals — from data structures and algorithms to web
                                technologies and databases.
                            </p>
                        </div>

                        <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                            <h3 className="text-foreground font-bold text-xl mb-3 flex items-center gap-2">
                                <Icon name="BriefcaseIcon" size={22} className="text-primary" />
                                Current Work
                            </h3>
                            <p className="text-foreground-secondary leading-relaxed text-base">
                                Currently working as an Angular Developer at Tagline Infotech LLP, I build and maintain
                                responsive web applications using Angular and TypeScript. I focus on writing clean,
                                reusable code and have hands-on experience integrating REST APIs, managing version
                                control with Git, and collaborating in team environments.
                            </p>
                        </div>

                        <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon name="RocketLaunchIcon" size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold text-lg mb-1.5">Looking Ahead</p>
                                    <p className="text-foreground-secondary leading-relaxed text-base">
                                        My long-term goal is to become a software engineer specializing in AI-related
                                        technologies. I am currently preparing applications for Master's programs in
                                        Computer Science at universities in Germany — a country known for its rigorous
                                        engineering education and strong research culture in AI.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {highlights.map((item, i) => (
                                <div
                                    key={item.label}
                                    className="scroll-reveal-hidden glass-card rounded-xl p-4 card-hover flex items-center gap-3.5"
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon name={item.icon as any} size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-0.5">
                                            {item.label}
                                        </p>
                                        <p className="text-foreground text-sm font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}