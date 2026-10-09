'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
    const [year, setYear] = useState<number>(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="border-t border-white/5 bg-background-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Left: Logo + tagline */}
                    <div className="flex flex-col gap-3 max-w-xs">
                        <div className="flex items-center gap-2">
                            <AppLogo size={32} />
                            <span className="font-bold text-foreground text-sm">Parthiv Jogadiya</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Angular Developer · Software Developer · Aspiring AI Specialist
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            {/* GitHub — replace href with actual URL */}
                            <a
                                href="https://github.com/Parthiv0702"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
                            >
                                <Icon name="CodeBracketIcon" size={18} />
                            </a>
                            {/* LinkedIn — replace href with actual URL */}
                            <a
                                href="https://linkedin.com/in/parthiv-jogadiya"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
                            >
                                <Icon name="BriefcaseIcon" size={18} />
                            </a>
                            {/* Email — replace with actual email */}
                            <a
                                href="mailto:parthivjogadiya12@gmail.com"
                                aria-label="Email"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
                            >
                                <Icon name="EnvelopeIcon" size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Nav links */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 lg:gap-x-10">
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/about' },
                            { label: 'Projects', href: '/projects' },
                            { label: 'Experience', href: '/#experience' },
                            { label: 'Skills', href: '/#skills' },
                            { label: 'Education', href: '/#education' },
                            { label: 'CV', href: '/#cv' },
                            { label: 'Contact', href: '/#contact' },
                        ]?.map((link) => (
                            <Link
                                key={link?.label}
                                href={link?.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
                            >
                                {link?.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="divider-gradient mt-10 mb-6" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {year} Parthiv Jogadiya. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 text-sm text-muted-foreground">
                        <Link href="/#contact" className="hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center">
                            Privacy
                        </Link>
                        <Link href="/#contact" className="hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}