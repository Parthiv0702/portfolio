'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // NOTE: Wire to Formspree, EmailJS, or Next.js API route for actual sending
        // Replace this with: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
        await new Promise((res) => setTimeout(res, 1500));
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
    };

    const contactLinks = [
        {
            icon: 'EnvelopeIcon',
            label: 'Email',
            // Replace with actual email address
            value: 'parthivjogadiya12@gmail.com',
            href: 'mailto:parthivjogadiya12@gmail.com',
        },
        {
            icon: 'CodeBracketIcon',
            label: 'GitHub',
            // Replace with actual GitHub URL
            value: 'github.com/Parthiv0702',
            href: 'https://github.com/Parthiv0702',
        },
        {
            icon: 'BriefcaseIcon',
            label: 'LinkedIn',
            // Replace with actual LinkedIn URL
            value: 'linkedin.com/in/parthiv-jogadiya',
            href: 'https://www.linkedin.com/in/parthiv-jogadiya',
        },
        {
            icon: 'MapPinIcon',
            label: 'Location',
            value: 'Surat, Gujarat, India',
            href: null,
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-24 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-6xl mx-auto">
                <div className="scroll-reveal-hidden mb-12">
                    <span className="section-label">Get In Touch</span>
                    <h2 id="contact-heading" className="text-section-heading text-foreground mt-2">
                        Let&apos;s <span className="text-gradient-blue">Connect</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-lg text-sm sm:text-base">
                        Whether for collaboration, university inquiries, or professional opportunities — I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Info — 2 cols */}
                    <div className="lg:col-span-2 space-y-4">
                        {contactLinks.map((link, i) => (
                            <div
                                key={link.label}
                                className="scroll-reveal-hidden glass-card rounded-xl p-5 card-hover flex items-center gap-4"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name={link.icon as any} size={18} className="text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">{link.label}</p>
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200 truncate block"
                                        >
                                            {link.value}
                                        </a>
                                    ) : (
                                        <p className="text-foreground-secondary text-sm font-medium">{link.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Availability Note */}
                        <div className="scroll-reveal-hidden glass-card rounded-xl p-5 border border-primary/10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-foreground text-sm font-semibold">Open to Opportunities</span>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Currently available for freelance projects, internships, and academic collaborations. Response time: within 24–48 hours.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form — 3 cols */}
                    <div className="lg:col-span-3 scroll-reveal-hidden">
                        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                        Name <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="contact-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                        Email <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="contact-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                    className="contact-input"
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                    Message <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    className="contact-input resize-none"
                                    disabled={status === 'loading'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <Icon name="CheckCircleIcon" size={18} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Icon name="PaperAirplaneIcon" size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center">
                                    Something went wrong. Please try again or email directly.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}