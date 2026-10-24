'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ProfileImageFrame from '@/components/ui/ProfileImageFrame';

const languages = [
    { name: 'Gujarati', level: 'Mother Tongue', proficiency: 'Native' },
    { name: 'English', level: 'Other Language', proficiency: 'Fluent' },
    { name: 'Hindi', level: 'Other Language', proficiency: 'Fluent' },
];

const hobbiesAndInterests = [
    {
        icon: 'TrophyIcon',
        label: 'Esports and Gaming',
        desc: 'Enjoy playing video games, exploring gaming strategies, and following competitive esports.',
    },
    {
        icon: 'GlobeAltIcon',
        label: 'Travelling',
        desc: 'Enjoy exploring new places, experiencing different cultures, and discovering new destinations.',
    },
    {
        icon: 'VideoCameraIcon',
        label: 'Content Creation',
        desc: 'Enjoy making content around gaming and lifestyle.',
    },
    {
        icon: 'SparklesIcon',
        label: 'Soft Skills',
        desc: 'Communication, problem-solving, critical thinking, teamwork, adaptability, and time management.',
    },
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
                            Angular Developer · BCA Graduate · Surat &amp; Vadodara, India
                        </p>
                    </div>
                </section>

                {/* Background Story */}
                <section className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 space-y-5">
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="AcademicCapIcon" size={22} className="text-primary" />
                                    Education &amp; Training
                                </h2>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-4">
                                    I completed my Bachelor of Computer Applications (BCA) at Veer Narmad South Gujrat University [ 01/07/2022 – 31/05/2025 ] in Surat, India, earning an EQF Level 6 qualification.
                                </p>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-3">
                                    My academic coursework spanned:
                                </p>
                                <ul className="text-foreground-secondary text-sm space-y-1.5 list-disc pl-5">
                                    <li><strong className="text-foreground">Computer Programming &amp; Software Development:</strong> Programming Methodology, Programming Skills, Java, .NET, Unix &amp; Shell Programming, Software Engineering.</li>
                                    <li><strong className="text-foreground">Data &amp; Databases:</strong> Object-Oriented Programming &amp; Data Structures, RDBMS, Data Manipulation &amp; Analysis, Database Handling using Python, Information Systems.</li>
                                    <li><strong className="text-foreground">Web Technologies:</strong> Web Designing-II, Advanced Web Designing, Web Framework &amp; Services, ASP.NET.</li>
                                    <li><strong className="text-foreground">Computer Systems:</strong> Operating Systems-I, Network Technologies, Computer Graphics.</li>
                                    <li><strong className="text-foreground">Emerging Technologies:</strong> Internet of Things (IoT), E-Commerce &amp; Cyber Security.</li>
                                    <li><strong className="text-foreground">Mathematics &amp; Statistics:</strong> Mathematics, Statistical Methods.</li>
                                </ul>
                            </div>

                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="BriefcaseIcon" size={22} className="text-primary" />
                                    Work Experience
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center flex-wrap">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer</h3>
                                            <span className="text-xs text-primary font-medium">01/07/2026 – Current</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Digipace Technologies Pvt. Ltd. – Vadodara, India</p>
                                        <p className="text-foreground-secondary text-sm leading-relaxed mt-2">
                                            Working as an Angular Developer since 1 July 2026. Developing and maintaining web application features using various technologies. Responsibilities include building responsive user interfaces, integrating REST APIs, debugging and resolving issues, testing application functionality, and collaborating with senior developers to improve code quality and application performance.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-4">
                                        <div className="flex justify-between items-center flex-wrap">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer</h3>
                                            <span className="text-xs text-muted-foreground">01/07/2025 – 30/06/2026</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP – Surat, India</p>
                                        <p className="text-foreground-secondary text-sm leading-relaxed mt-2">
                                            Developed and maintained responsive web applications using Angular and TypeScript. Designed and implemented reusable UI components, integrated REST APIs, handled application functionality and bug fixing, and worked with Git for version control. Collaborated with team members to implement new features, improve application performance, and resolve technical issues.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-4">
                                        <div className="flex justify-between items-center flex-wrap">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer Intern</h3>
                                            <span className="text-xs text-muted-foreground">01/01/2025 – 30/06/2025</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP – Surat, India</p>
                                        <p className="text-foreground-secondary text-sm leading-relaxed mt-2">
                                            Learned about basics and advance fundamentals of Angular with many additional essential soft skills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="DocumentCheckIcon" size={22} className="text-primary" />
                                    Practical Experience &amp; Projects
                                </h2>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base mb-3">
                                    Completed a <strong className="text-foreground">Major Project</strong> as part of the BCA curriculum — the <strong>Career Guidance System</strong>, built using HTML, CSS, JavaScript, Python (Flask), and SQLite to help students connect with career counsellors, book appointments, and access career resources.
                                </p>
                                <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                                    Also contributed to industry projects such as <strong>Launch On Demand</strong> (aerospace and spaceport services) at Tagline Infotech LLP, as well as independent full-stack applications including a <strong>Project Management System (PMS)</strong> and personal portfolio.
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
                                        { label: 'Name', value: 'Parthiv Jogadiya' },
                                        { label: 'Nationality', value: 'Indian' },
                                        { label: 'Date of Birth', value: '07/12/2004' },
                                        { label: 'Place of Birth', value: 'Surat, India' },
                                        { label: 'Email', value: 'jogadiyaparthiv12@gmail.com' },
                                        { label: 'LinkedIn', value: 'Parthiv Jogadiya' },
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
                                    Language Skills
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

                {/* Hobbies and Interests */}
                <section className="py-12">
                    <div className="scroll-reveal-hidden mb-8">
                        <span className="section-label">Lifestyle &amp; Interests</span>
                        <h2 className="text-foreground font-bold text-2xl mt-1">Hobbies and Interests</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {hobbiesAndInterests.map((item, i) => (
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
                            Open to collaborations, engineering discussions, and professional opportunities.
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