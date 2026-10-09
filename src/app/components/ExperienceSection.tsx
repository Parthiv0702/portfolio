'use client';

import React, { useEffect, useRef } from 'react';
import { experiences } from '@/data/experience';
import Icon from '@/components/ui/AppIcon';

export default function ExperienceSection() {
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
                            }, i * 150);
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
            id="experience"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary/30"
            aria-labelledby="experience-heading"
        >
            <div className="max-w-5xl mx-auto">
                <div className="scroll-reveal-hidden mb-12">
                    <span className="section-label">Work Experience</span>
                    <h2 id="experience-heading" className="text-section-heading text-foreground mt-2">
                        Professional{' '}
                        <span className="text-gradient-blue">Timeline</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Timeline vertical line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" aria-hidden="true" />

                    <div className="space-y-10">
                        {experiences?.map((exp, index) => (
                            <div key={exp?.id} className="scroll-reveal-hidden relative pl-16 sm:pl-20">
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-4 sm:left-6 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${exp?.current
                                            ? 'bg-primary border-primary glow-blue' : 'bg-background-secondary border-border'
                                        }`}
                                    aria-hidden="true"
                                >
                                    {exp?.current && (
                                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    )}
                                </div>

                                <div className="glass-card rounded-2xl p-6 sm:p-8 card-hover">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-foreground font-bold text-lg">{exp?.role}</h3>
                                                {exp?.current && (
                                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                                <span className="text-accent font-semibold text-sm">{exp?.company}</span>
                                                <span className="text-muted-foreground text-xs">·</span>
                                                <span className="text-muted-foreground text-sm flex items-center gap-1">
                                                    <Icon name="MapPinIcon" size={13} />
                                                    {exp?.location}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm flex-shrink-0">
                                            <Icon name="CalendarDaysIcon" size={14} />
                                            <span>{exp?.startDate} — {exp?.endDate}</span>
                                        </div>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-2.5 mb-6">
                                        {exp?.description?.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-foreground-secondary text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp?.skills?.map((skill) => (
                                            <span key={skill} className="tech-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}