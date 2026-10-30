'use client';

import React, { useEffect, useRef } from 'react';
import { cvSkills, skillCategories, languageSkills, interpersonalSkills } from '@/data/skills';
import Icon from '@/components/ui/AppIcon';

export default function SkillsSection() {
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
                            }, i * 80);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary/30"
            aria-labelledby="skills-heading"
        >
            <div className="max-w-7xl mx-auto">
                <div className="scroll-reveal-hidden mb-12">
                    <span className="section-label">Skills &amp; Competencies</span>
                    <h2 id="skills-heading" className="text-section-heading text-foreground mt-2">
                        Technical &amp; <span className="text-gradient-blue">Language Skills</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
                        Skills, competencies, and language proficiencies managed exactly as documented in my curriculum vitae.
                    </p>
                </div>

                {/* 1. Main CV Skills Strip (Exact order from CV) */}
                <div className="scroll-reveal-hidden glass-card rounded-2xl p-6 sm:p-8 mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Icon name="CommandLineIcon" size={20} className="text-primary" />
                        <h3 className="text-foreground font-bold text-base uppercase tracking-wider">
                            Skills (As Ordered in CV)
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {cvSkills.map((skill, index) => (
                            <div key={skill} className="flex items-center">
                                <span className="tech-badge text-foreground font-medium text-sm px-3.5 py-1.5">
                                    {skill}
                                </span>
                                {index < cvSkills.length - 1 && (
                                    <span className="text-muted-foreground/40 mx-1 text-xs select-none">/</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Categorized Technical Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {skillCategories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className="scroll-reveal-hidden glass-card rounded-2xl p-6 card-hover"
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${cat.accentColor}15`, border: `1px solid ${cat.accentColor}25` }}
                                >
                                    <Icon name={cat.icon as any} size={18} style={{ color: cat.accentColor } as React.CSSProperties} />
                                </div>
                                <h4 className="text-foreground font-semibold text-sm">{cat.category}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-chip px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{ color: cat.accentColor }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Language Skills & Communication/Organisational Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* LANGUAGE SKILLS */}
                    <div className="scroll-reveal-hidden glass-card rounded-2xl p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon name="LanguageIcon" size={20} className="text-primary" />
                            <h3 className="text-foreground font-bold text-base uppercase tracking-wider">
                                Language Skills
                            </h3>
                        </div>

                        <div className="mb-5 pb-5 border-b border-white/5">
                            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                                Mother tongue(s)
                            </p>
                            <div className="flex gap-2">
                                {languageSkills.motherTongues.map((tongue) => (
                                    <span key={tongue} className="tech-badge text-foreground font-semibold">
                                        {tongue}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-3">
                                Other language(s)
                            </p>
                            <div className="space-y-3">
                                {languageSkills.otherLanguages.map((lang) => (
                                    <div key={lang.language} className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-foreground font-bold text-sm">{lang.language}</span>
                                            <span className="text-xs text-muted-foreground uppercase">CEFR Assessment</span>
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 text-center text-xs">
                                            <div className="bg-white/5 p-2 rounded-lg">
                                                <div className="text-muted-foreground text-[10px] mb-1">Listening</div>
                                                <div className="text-primary font-bold">{lang.listening}</div>
                                            </div>
                                            <div className="bg-white/5 p-2 rounded-lg">
                                                <div className="text-muted-foreground text-[10px] mb-1">Reading</div>
                                                <div className="text-primary font-bold">{lang.reading}</div>
                                            </div>
                                            <div className="bg-white/5 p-2 rounded-lg">
                                                <div className="text-muted-foreground text-[10px] mb-1">Spoken Int.</div>
                                                <div className="text-primary font-bold">{lang.spokenInteraction}</div>
                                            </div>
                                            <div className="bg-white/5 p-2 rounded-lg">
                                                <div className="text-muted-foreground text-[10px] mb-1">Spoken Prod.</div>
                                                <div className="text-primary font-bold">{lang.spokenProduction}</div>
                                            </div>
                                            <div className="bg-white/5 p-2 rounded-lg">
                                                <div className="text-muted-foreground text-[10px] mb-1">Writing</div>
                                                <div className="text-primary font-bold">{lang.writing}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COMMUNICATION AND INTERPERSONAL SKILLS */}
                    <div className="scroll-reveal-hidden glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Icon name="SparklesIcon" size={20} className="text-primary" />
                                <h3 className="text-foreground font-bold text-base uppercase tracking-wider">
                                    Communication and Interpersonal Skills
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
                                    <p className="text-foreground text-sm font-semibold mb-2">
                                        Communication Skills:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {interpersonalSkills.communication.map((skill) => (
                                            <span key={skill} className="tech-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
                                    <p className="text-foreground text-sm font-semibold mb-2">
                                        Organisational Skills:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {interpersonalSkills.organisational.map((skill) => (
                                            <span key={skill} className="tech-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/10">
                            <p className="text-xs text-foreground-secondary leading-relaxed">
                                Managed collaboratively across cross-functional engineering teams, Agile sprint cycles, and client-facing deliverable milestones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
