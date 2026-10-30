'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface NavItem {
    label: string;
    href: string;
    isAnchor?: boolean;
    anchorId?: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/#experience', isAnchor: true, anchorId: 'experience' },
    { label: 'Education', href: '/#education', isAnchor: true, anchorId: 'education' },
    { label: 'Skills', href: '/#skills', isAnchor: true, anchorId: 'skills' },
    { label: 'Projects', href: '/#projects', isAnchor: true, anchorId: 'projects' },
    { label: 'CV', href: '/#cv', isAnchor: true, anchorId: 'cv' },
    { label: 'Contact', href: '/#contact', isAnchor: true, anchorId: 'contact' },
];

const HOME_SECTIONS = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'cv', 'contact'];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>('hero');
    const pathname = usePathname();
    const router = useRouter();
    const rafRef = useRef<number | null>(null);

    // Throttled scroll listener
    const handleScroll = useCallback(() => {
        if (rafRef.current !== null) return;
        rafRef.current = requestAnimationFrame(() => {
            const currentY = window.scrollY;
            setScrolled(currentY > 30);

            if (pathname === '/' && currentY < 100) {
                setActiveSection('hero');
            }
            rafRef.current = null;
        });
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    // Active section detection on homepage
    useEffect(() => {
        if (pathname !== '/') {
            setActiveSection(null);
            return;
        }

        // Check URL hash on initial load
        if (window.location.hash) {
            const targetId = window.location.hash.replace('#', '');
            if (HOME_SECTIONS.includes(targetId)) {
                setActiveSection(targetId);
                const el = document.getElementById(targetId);
                if (el) {
                    setTimeout(() => {
                        const headerOffset = 80;
                        const elementPosition = el.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }, 150);
                }
            }
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    const bestMatch = visible.reduce((prev, curr) =>
                        curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                    );
                    if (bestMatch.target.id && window.scrollY >= 100) {
                        setActiveSection(bestMatch.target.id);
                    }
                }
            },
            {
                rootMargin: '-20% 0px -50% 0px',
                threshold: [0.1, 0.3, 0.5],
            }
        );

        HOME_SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
        setMobileOpen(false);

        if (item.isAnchor && pathname === '/') {
            e.preventDefault();
            if (item.anchorId) {
                setActiveSection(item.anchorId);
                const el = document.getElementById(item.anchorId);
                if (el) {
                    const headerOffset = 80;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });

                    router.push(item.href, { scroll: false });
                }
            }
        }
    };

    const isActive = (item: NavItem) => {
        if (item.href === '/') {
            return pathname === '/' && (activeSection === 'hero' || activeSection === null);
        }
        if (item.href === '/about') {
            return pathname === '/about' || (pathname === '/' && activeSection === 'about');
        }
        if (item.anchorId === 'projects') {
            return pathname === '/projects' || (pathname === '/' && activeSection === 'projects');
        }
        if (item.isAnchor && item.anchorId) {
            return pathname === '/' && activeSection === item.anchorId;
        }
        return false;
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-200 ${scrolled ? 'glass-nav shadow-card-dark' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-18">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <AppLogo size={32} />
                            <span className="font-bold text-base text-foreground tracking-tight hidden sm:block group-hover:text-primary transition-colors duration-200">
                                Parthiv Jogadiya
                            </span>
                            <span className="font-bold text-base text-foreground tracking-tight sm:hidden group-hover:text-primary transition-colors duration-200">
                                PJ
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => {
                                const active = isActive(item);
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item)}
                                        className={`nav-link-underline px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:text-foreground ${active ? 'text-primary active' : 'text-muted-foreground'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/#contact"
                                onClick={(e) => {
                                    if (pathname === '/') {
                                        e.preventDefault();
                                        const el = document.getElementById('contact');
                                        if (el) {
                                            const headerOffset = 80;
                                            const elementPosition = el.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                            router.push('/#contact', { scroll: false });
                                            setActiveSection('contact');
                                        }
                                    }
                                }}
                                className="hidden sm:flex btn-primary px-4 py-2 rounded-full text-sm font-semibold items-center gap-2"
                            >
                                <Icon name="EnvelopeIcon" size={16} />
                                Hire Me
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            >
                                {mobileOpen ? (
                                    <Icon name="XMarkIcon" size={22} />
                                ) : (
                                    <Icon name="Bars3Icon" size={22} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 modal-overlay lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong flex flex-col lg:hidden transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-5 border-b border-white/5">
                    <span className="font-bold text-foreground">Navigation</span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                        aria-label="Close menu"
                    >
                        <Icon name="XMarkIcon" size={20} />
                    </button>
                </div>
                <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                    {navItems.map((item, i) => {
                        const active = isActive(item);
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] ${active
                                        ? 'bg-primary/10 text-primary font-semibold'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                    }`}
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-white/5">
                    <Link
                        href="/#contact"
                        onClick={(e) => {
                            setMobileOpen(false);
                            if (pathname === '/') {
                                e.preventDefault();
                                const el = document.getElementById('contact');
                                if (el) {
                                    const headerOffset = 80;
                                    const elementPosition = el.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                    router.push('/#contact', { scroll: false });
                                    setActiveSection('contact');
                                }
                            }
                        }}
                        className="btn-primary w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 min-h-[44px]"
                    >
                        <Icon name="EnvelopeIcon" size={16} />
                        Get In Touch
                    </Link>
                </div>
            </div>
        </>
    );
}
