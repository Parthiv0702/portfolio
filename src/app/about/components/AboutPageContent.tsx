'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ProfileImageFrame from '@/components/ui/ProfileImageFrame';
import { languageSkills, interpersonalSkills, hobbiesAndInterests } from '@/data/skills';

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
                            Angular Developer · BCA Graduate · Surat, India
                        </p>
                    </div>
                </section>

                {/* Main Content & Sidebar */}
                <section className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 space-y-6">

                            {/* WORK EXPERIENCE - In exact CV order */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="BriefcaseIcon" size={22} className="text-primary" />
                                    Work Experience
                                </h2>
                                <div className="space-y-6">
                                    {/* 1. Elpiora Tech Solutions */}
                                    <div>
                                        <div className="flex justify-between items-center flex-wrap gap-1">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer</h3>
                                            <span className="text-xs text-primary font-medium">01/07/2026 – Current</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Elpiora Tech Solutions Pvt. Ltd. – Surat, India</p>
                                        <ul className="text-foreground-secondary text-sm space-y-1.5 list-disc pl-5 mt-3">
                                            <li>Develop and maintain responsive web applications using Angular, TypeScript, HTML5, and CSS3.</li>
                                            <li>Build reusable components and services to ensure maintainable and scalable application development.</li>
                                            <li>Collaborate with team members to understand requirements and deliver effective technical solutions.</li>
                                            <li>Implement Angular routing, form validation, data binding, and interactive user interfaces.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Tagline Infotech LLP */}
                                    <div className="border-t border-white/5 pt-5">
                                        <div className="flex justify-between items-center flex-wrap gap-1">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer</h3>
                                            <span className="text-xs text-muted-foreground">01/07/2025 – 30/06/2026</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP – Surat, India</p>
                                        <ul className="text-foreground-secondary text-sm space-y-1.5 list-disc pl-5 mt-3">
                                            <li>Developed and maintained web application user interfaces using Angular, TypeScript, HTML5, and CSS3.</li>
                                            <li>Collaborated with backend developers, UI/UX designers, and team members to deliver application features.</li>
                                            <li>Maintained code quality and followed established development standards.</li>
                                            <li>Participated in application enhancements, code maintenance, and performance improvements.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Angular Developer Intern */}
                                    <div className="border-t border-white/5 pt-5">
                                        <div className="flex justify-between items-center flex-wrap gap-1">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer Intern</h3>
                                            <span className="text-xs text-muted-foreground">01/01/2025 – 30/06/2025</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP – Surat, India</p>
                                        <p className="text-muted-foreground text-xs mt-2 mb-1.5 font-medium">Main subject / occupational skills covered :</p>
                                        <ul className="text-foreground-secondary text-sm space-y-1.5 list-disc pl-5">
                                            <li>Worked with HTML, CSS, JavaScript, and TypeScript for frontend development.</li>
                                            <li>Assisted in integrating REST APIs with Angular applications.</li>
                                            <li>Worked with Angular services, components, and data binding.</li>
                                            <li>Identified and fixed basic UI issues and frontend bugs.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* EDUCATION AND TRAINING - In exact CV order */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="AcademicCapIcon" size={22} className="text-primary" />
                                    Education and Training
                                </h2>
                                <div className="space-y-6">
                                    {/* Bachelor of Computer Application */}
                                    <div>
                                        <div className="flex justify-between items-center flex-wrap gap-1">
                                            <h3 className="text-foreground font-semibold text-base">Bachelor of Computer Application</h3>
                                            <span className="text-xs text-primary font-medium">06/06/2022 – 15/04/2025</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Veer Narmad South Gujarat University</p>
                                        <div className="text-muted-foreground text-xs mt-1 space-x-2">
                                            <span>City: Surat | Country: India</span>
                                            <span>|</span>
                                            <a href="https://www.vnsgu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                                                Website: https://www.vnsgu.ac.in/
                                            </a>
                                            <span>|</span>
                                            <span>Level in EQF: EQF level 6</span>
                                        </div>

                                        <p className="text-foreground text-xs font-semibold uppercase tracking-wider mt-4 mb-2">Curriculum Breakdown:</p>
                                        <ul className="text-foreground-secondary text-sm space-y-1.5 list-disc pl-5">
                                            <li><strong className="text-foreground">Computer Programming &amp; Software Development:</strong> Programming Methodology, Programming Skills, Java, .NET, Unix &amp; Shell Programming, Software Engineering.</li>
                                            <li><strong className="text-foreground">Data &amp; Databases:</strong> Object-Oriented Programming &amp; Data Structures, RDBMS, Data Manipulation &amp; Analysis, Database Handling using Python, Information Systems.</li>
                                            <li><strong className="text-foreground">Web Technologies:</strong> Web Designing-II, Advanced Web Designing, Web Framework &amp; Services, ASP.NET.</li>
                                            <li><strong className="text-foreground">Computer Systems:</strong> Operating Systems-I, Network Technologies, Computer Graphics.</li>
                                            <li><strong className="text-foreground">Emerging Technologies:</strong> Internet of Things (IoT), E-Commerce &amp; Cyber Security.</li>
                                            <li><strong className="text-foreground">Mathematics &amp; Statistics:</strong> Mathematics, Statistical Methods.</li>
                                            <li><strong className="text-foreground">Practical Experience:</strong> Major Project.</li>
                                        </ul>
                                    </div>

                                    {/* Angular Developer Intern (Education & Training) */}
                                    <div className="border-t border-white/5 pt-5">
                                        <div className="flex justify-between items-center flex-wrap gap-1">
                                            <h3 className="text-foreground font-semibold text-base">Angular Developer Intern</h3>
                                            <span className="text-xs text-muted-foreground">01/01/2025 – 30/06/2025</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">Tagline Infotech LLP</p>
                                        <p className="text-muted-foreground text-xs mt-1">City: Surat | Country: India</p>
                                        <p className="text-muted-foreground text-xs mt-2 mb-1.5 font-medium">Main subject / occupational skills covered :</p>
                                        <ul className="text-foreground-secondary text-sm space-y-1.5 list-disc pl-5">
                                            <li>Worked with HTML, CSS, JavaScript, and TypeScript for frontend development.</li>
                                            <li>Assisted in integrating REST APIs with Angular applications.</li>
                                            <li>Worked with Angular services, components, and data binding.</li>
                                            <li>Identified and fixed basic UI issues and frontend bugs.</li>
                                        </ul>
                                    </div>

                                    {/* Higher Secondary Education Certificate */}
                                    <div className="border-t border-white/5 pt-5">
                                        <div className="flex justify-between items-center flex-wrap gap-1">
                                            <h3 className="text-foreground font-semibold text-base">Higher Secondary Education Certificate</h3>
                                            <span className="text-xs text-muted-foreground">08/06/2020 – 31/05/2022</span>
                                        </div>
                                        <p className="text-accent text-xs font-medium">SMT. V. D. N. Shah Sec. &amp; M. L. Patel &amp; SMT. D. M. Patel H. S. School</p>
                                        <p className="text-muted-foreground text-xs mt-1">City: Surat | Country: India</p>
                                    </div>
                                </div>
                            </div>

                            {/* PROJECTS (Academic and Technical Projects) */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-7">
                                <h2 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                                    <Icon name="DocumentCheckIcon" size={22} className="text-primary" />
                                    Academic and Technical Projects
                                </h2>
                                <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary">
                                    <div>
                                        <p className="font-semibold text-foreground">1. Cafe Management System</p>
                                        <p className="mt-1">
                                            Developed a cafe management system as a minor project during my BCA using React.js, Node.js, and MySQL. Implemented separate admin and user panels with features for menu management, user registration and login, food browsing, shopping cart, food ordering, table reservations, and customer feedback.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-3">
                                        <p className="font-semibold text-foreground">
                                            2. Launch On Demand (
                                            <a href="https://launchondemand.space/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                https://launchondemand.space/
                                            </a>
                                            )
                                        </p>
                                        <p className="mt-1">
                                            Launch On Demand is an aerospace and commercial space services company that supports launch operations through regulatory licensing, mission management, and spaceport technical services. The company provides solutions for launch planning, safety coordination, weather monitoring, and launch integration to help make commercial space missions more efficient and reliable. I developed flight- and marine-related functionality and video capture functionality across the project during my work at Tagline Infotech LLP.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-3">
                                        <p className="font-semibold text-foreground">3. Career Guidance System</p>
                                        <p className="mt-1">
                                            Developed a web-based Career Guidance System to connect students with professional career counsellors. Worked with HTML, CSS, JavaScript, Python (Flask), and SQLite to develop the application. Implemented features such as user registration, login, appointment booking, and profile management. The system also supports career resource sharing, feedback management, and appointment tracking. Participated in software testing and project documentation.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-3">
                                        <p className="font-semibold text-foreground">
                                            4. Project Management System (PMS) (
                                            <a href="https://pms-workspace-hub.vercel.app/auth/login" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                https://pms-workspace-hub.vercel.app/auth/login
                                            </a>
                                            )
                                        </p>
                                        <p className="mt-1">
                                            Developed a Project Management System (PMS) to simplify project organization, task tracking, and team collaboration. The application helps users manage projects, monitor task progress, and keep project-related information organized in one place. Built with a modern web technology stack, the system focuses on usability, efficient workflow management, and a responsive user experience.
                                        </p>
                                    </div>
                                </div>
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
                                        { label: 'Email Address', value: 'jogadiyaparthiv12@gmail.com' },
                                        { label: 'LinkedIn', value: 'Parthiv Jogadiya' },
                                        { label: 'Website', value: 'https://parthiv-jogadiya-portfolio.vercel.app/' },
                                    ].map((item) => (
                                        <div key={item.label} className="flex flex-col gap-0.5">
                                            <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">{item.label}</span>
                                            {item.value.startsWith('http') ? (
                                                <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate text-xs">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-foreground-secondary font-medium">{item.value}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Language Skills */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                                <h3 className="text-foreground font-bold text-base mb-3 flex items-center gap-2">
                                    <Icon name="LanguageIcon" size={18} className="text-primary" />
                                    Language Skills
                                </h3>
                                <div className="space-y-3">
                                    <div className="text-xs">
                                        <span className="text-muted-foreground uppercase font-semibold tracking-wider">Mother tongue(s):</span>
                                        <p className="text-foreground font-medium mt-1">
                                            {languageSkills.motherTongues.join(' | ')}
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-3">
                                        <span className="text-muted-foreground uppercase font-semibold tracking-wider text-xs block mb-2">Other language(s):</span>
                                        <div className="space-y-3">
                                            {languageSkills.otherLanguages.map((lang) => (
                                                <div key={lang.language} className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-foreground font-semibold text-sm">{lang.language}</span>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-1 text-[11px] text-center">
                                                        <div>
                                                            <div className="text-muted-foreground text-[10px]">Listening</div>
                                                            <div className="text-primary font-bold">{lang.listening}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-muted-foreground text-[10px]">Reading</div>
                                                            <div className="text-primary font-bold">{lang.reading}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-muted-foreground text-[10px]">Spoken Int.</div>
                                                            <div className="text-primary font-bold">{lang.spokenInteraction}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-muted-foreground text-[10px]">Spoken Prod.</div>
                                                            <div className="text-primary font-bold">{lang.spokenProduction}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-muted-foreground text-[10px]">Writing</div>
                                                            <div className="text-primary font-bold">{lang.writing}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Communication & Interpersonal Skills */}
                            <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                                <h3 className="text-foreground font-bold text-base mb-3 flex items-center gap-2">
                                    <Icon name="SparklesIcon" size={18} className="text-primary" />
                                    Communication &amp; Interpersonal Skills
                                </h3>
                                <div className="space-y-3 text-xs">
                                    <div>
                                        <span className="text-muted-foreground uppercase font-semibold tracking-wider block mb-1">Communication Skills:</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {interpersonalSkills.communication.map((skill) => (
                                                <span key={skill} className="tech-badge">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 pt-2">
                                        <span className="text-muted-foreground uppercase font-semibold tracking-wider block mb-1">Organisational Skills:</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {interpersonalSkills.organisational.map((skill) => (
                                                <span key={skill} className="tech-badge">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
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
                        <span className="section-label">Hobbies and Interests</span>
                        <h2 className="text-foreground font-bold text-2xl mt-1">Area of Interests &amp; Hobbies</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Hobbies Card */}
                        <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                            <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                                <Icon name="SparklesIcon" size={20} className="text-primary" />
                                Hobbies
                            </h3>
                            <ul className="space-y-2 text-foreground-secondary text-sm">
                                {hobbiesAndInterests.hobbies.map((hobby) => (
                                    <li key={hobby} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{hobby}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Area of Interests Card */}
                        <div className="scroll-reveal-hidden glass-card rounded-2xl p-6">
                            <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                                <Icon name="CpuChipIcon" size={20} className="text-primary" />
                                Area of Interests
                            </h3>
                            <ul className="space-y-2 text-foreground-secondary text-sm">
                                {hobbiesAndInterests.areaOfInterests.map((interest) => (
                                    <li key={interest} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        <span>{interest}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
