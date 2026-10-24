'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';
import Icon from '@/components/ui/AppIcon';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
        >
            <div
                className="glass-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <span className="section-label mb-1 block">{project.category}</span>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">{project.title}</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                            aria-label="Close modal"
                        >
                            <Icon name="XMarkIcon" size={20} />
                        </button>
                    </div>

                    <div className="divider-gradient mb-6" />

                    {/* Full Description */}
                    <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-6">
                        {project.fullDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-3">
                            Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Date */}
                    {project.date && (
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-6">
                            <Icon name="CalendarDaysIcon" size={14} className="text-primary" />
                            <span>{project.date}</span>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 flex-wrap">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium min-h-[44px]"
                            >
                                <Icon name="CodeBracketIcon" size={16} />
                                View on GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium min-h-[44px]"
                            >
                                <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="py-24 px-4 sm:px-6 lg:px-8"
            aria-labelledby="projects-heading"
        >
            <div className="max-w-7xl mx-auto">
                <div className="scroll-reveal-hidden flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <span className="section-label">Portfolio</span>
                        <h2 id="projects-heading" className="text-section-heading text-foreground mt-2">
                            Selected <span className="text-gradient-blue">Projects</span>
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium self-start sm:self-auto min-h-[44px]"
                    >
                        View All
                        <Icon name="ArrowRightIcon" size={16} />
                    </Link>
                </div>

                {/* BENTO GRID AUDIT:
          Array has 4 cards: [task-management-app, ecommerce-frontend, data-dashboard, portfolio-website]
          Row 1 (lg): [col-1: task-management-app cs-1] [col-2: ecommerce-frontend cs-1]
          Row 2 (lg): [col-1: data-dashboard cs-1] [col-2: portfolio-website cs-1]
          Placed 4/4 cards ✓
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="scroll-reveal-hidden glass-card rounded-2xl p-6 card-hover flex flex-col group"
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name="FolderOpenIcon" size={20} className="text-primary" />
                                </div>
                                <div className="flex items-center gap-2">
                                    {project.featured && (
                                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                                            Featured
                                        </span>
                                    )}
                                    <span className="text-muted-foreground text-xs">{project.category}</span>
                                </div>
                            </div>

                            {/* Title + Description */}
                            <h3 className="text-foreground font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                                {project.title}
                            </h3>
                            {project.date && (
                                <p className="text-muted-foreground text-xs mb-3 flex items-center gap-1.5">
                                    <Icon name="CalendarDaysIcon" size={13} />
                                    <span>{project.date}</span>
                                </p>
                            )}
                            <p className="text-foreground-secondary text-sm leading-relaxed mb-5 flex-1">
                                {project.shortDescription}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.technologies.slice(0, 4).map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 4 && (
                                    <span className="tech-badge">+{project.technologies.length - 4}</span>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-primary text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 min-h-[44px]"
                                >
                                    View Details
                                    <Icon name="ArrowRightIcon" size={14} />
                                </button>
                                <div className="flex items-center gap-2 ml-auto">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                                            aria-label={`GitHub for ${project.title}`}
                                        >
                                            <Icon name="CodeBracketIcon" size={18} />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                                            aria-label={`Live demo for ${project.title}`}
                                        >
                                            <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
}