'use client';

import React, { useEffect, useRef } from 'react';
import { skillCategories } from '@/data/skills';
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
                    <span className="section-label">Technical Skills</span>
                    <h2 id="skills-heading" className="text-section-heading text-foreground mt-2">
                        Tools &amp; <span className="text-gradient-blue">Technologies</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-lg text-sm sm:text-base">
                        A curated set of technologies I have worked with across web development, backend integration, and tooling.
                    </p>
                </div>

                {/* BENTO GRID AUDIT:
          Array has 6 cards: [programming, frontend, frameworks, databases, tools, other]
          Row 1 (lg grid-cols-3): [col-1: programming cs-1] [col-2: frontend cs-1] [col-3: frameworks cs-1]
          Row 2 (lg grid-cols-3): [col-1: databases cs-1] [col-2: tools cs-1] [col-3: other cs-1]
          Placed 6/6 cards ✓
        */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className="scroll-reveal-hidden glass-card rounded-2xl p-6 card-hover"
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${cat.accentColor}15`, border: `1px solid ${cat.accentColor}25` }}
                                >
                                    <Icon name={cat.icon as any} size={18} style={{ color: cat.accentColor } as React.CSSProperties} />
                                </div>
                                <h3 className="text-foreground font-semibold text-sm">{cat.category}</h3>
                            </div>

                            {/* Skill Chips */}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-chip px-3 py-1.5 rounded-full text-xs font-semibold"
                                        style={{ color: cat.accentColor }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}