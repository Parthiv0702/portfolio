'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';
import Icon from '@/components/ui/AppIcon';

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
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
            aria-labelledby="modal-title"
        >
            <div
                className="glass-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="section-label mb-1 block">{project.category}</span>
                            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-foreground">{project.title}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
                            aria-label="Close"
                        >
                            <Icon name="XMarkIcon" size={20} />
                        </button>
                    </div>
                    <div className="divider-gradient mb-5" />
                    <p className="text-foreground-secondary leading-relaxed text-sm mb-6">{project.fullDescription}</p>
                    <div className="mb-6">
                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((t) => (
                                <span key={t} className="tech-badge">{t}</span>
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
                    <div className="flex gap-3 flex-wrap">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium min-h-[44px]"
                        >
                            <Icon name="CodeBracketIcon" size={16} />
                            GitHub
                        </a>
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

const ALL_CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPageContent() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

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
        if (pageRef.current) observer.observe(pageRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={pageRef} className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="scroll-reveal-hidden mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <Link href="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-1">
                            <Icon name="HomeIcon" size={13} />
                            Home
                        </Link>
                        <Icon name="ChevronRightIcon" size={13} className="text-muted-foreground" />
                        <span className="text-foreground text-sm font-medium">Projects</span>
                    </div>
                    <span className="section-label">Portfolio</span>
                    <h1 className="text-section-heading text-foreground mt-2">
                        All <span className="text-gradient-blue">Projects</span>
                    </h1>
                    <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base">
                        A collection of software development projects built with Angular, Next.js, TypeScript, and related technologies, as documented in my CV.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="scroll-reveal-hidden flex flex-wrap gap-2 mb-10">
                    {ALL_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] ${activeCategory === cat
                                    ? 'btn-primary' : 'btn-secondary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid
          BENTO GRID AUDIT (for "All" filter state):
          Array has 4 cards: [task-management-app, ecommerce-frontend, data-dashboard, portfolio-website]
          Row 1 (lg grid-cols-2): [col-1: task-management-app cs-1] [col-2: ecommerce-frontend cs-1]
          Row 2 (lg grid-cols-2): [col-1: data-dashboard cs-1] [col-2: portfolio-website cs-1]
          Placed 4/4 cards ✓
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((project, index) => (
                        <div
                            key={project.id}
                            className="scroll-reveal-hidden glass-card rounded-2xl p-6 card-hover flex flex-col group"
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            {/* Top Row */}
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name="FolderOpenIcon" size={22} className="text-primary" />
                                </div>
                                <div className="flex items-center gap-2 flex-wrap justify-end">
                                    {project.featured && (
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                                            Featured
                                        </span>
                                    )}
                                    <span className="text-muted-foreground text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-foreground font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                                {project.title}
                            </h2>
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
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">{tech}</span>
                                ))}
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
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                                        aria-label={`GitHub for ${project.title}`}
                                    >
                                        <Icon name="CodeBracketIcon" size={18} />
                                    </a>
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

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <Icon name="FolderOpenIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground text-lg">No projects in this category yet.</p>
                    </div>
                )}

                {/* CTA */}
                <div className="scroll-reveal-hidden mt-16 glass-card rounded-2xl p-8 sm:p-10 text-center border border-primary/10">
                    <h2 className="text-foreground font-bold text-2xl mb-3">Have a Project in Mind?</h2>
                    <p className="text-muted-foreground text-sm mb-7 max-w-md mx-auto">
                        Open to collaborating on Angular projects, REST API integrations, and frontend development work.
                    </p>
                    <Link
                        href="/#contact"
                        className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm min-h-[44px]"
                    >
                        <Icon name="EnvelopeIcon" size={18} />
                        Get In Touch
                    </Link>
                </div>

            </div>

            {selectedProject && (
                <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
}