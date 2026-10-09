'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface ProfileImageFrameProps {
    src?: string;
    alt?: string;
    className?: string;
}

export default function ProfileImageFrame({
    src = '/assets/images/parthiv.jpeg',
    alt = 'Parthiv Jogadiya',
    className = '',
}: ProfileImageFrameProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={`relative group max-w-sm sm:max-w-md mx-auto w-full ${className}`}>
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-1.5   from-primary via-accent to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse-slow pointer-events-none" />

            {/* Main Outer Frame Container */}
            <div className="relative glass-card rounded-3xl p-3 sm:p-4 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Decorative Top Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-3 border-b border-white/5 text-xs text-muted-foreground font-mono">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                </div>

                {/* Aspect Ratio Container for Image / Placeholder */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-background-secondary/60 flex flex-col items-center justify-center border border-white/5 group">
                    {!imageError && src ? (
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            onError={() => setImageError(true)}
                            priority
                        />
                    ) : (
                        /* Developer Placeholder Graphic */
                        <div className="relative inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-background-secondary/80 via-background/90 to-background-secondary/90">
                            {/* Animated Background Mesh */}
                            <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />

                            {/* Avatar Circle with Glowing Ring */}
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-primary via-accent to-blue-500 shadow-xl mb-4 group-hover:scale-105 transition-transform duration-500">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-background overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                                    <span className="text-3xl sm:text-4xl font-extrabold text-gradient-blue tracking-wider">
                                        PJ
                                    </span>
                                </div>
                            </div>

                            {/* Placeholder Labels */}
                            <h3 className="text-foreground font-bold text-lg sm:text-xl tracking-tight">
                                Parthiv Jogadiya
                            </h3>
                            <p className="text-accent text-xs font-semibold mt-1">
                                Angular &amp; Software Developer
                            </p>
                        </div>
                    )}

                    {/* Gradient Overlay for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Quick Info Overlay at bottom when image is shown */}
                    {!imageError && src && (
                        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-card border border-white/10 backdrop-blur-md flex items-center justify-between text-xs">
                            <div>
                                <p className="font-bold text-foreground text-sm">Parthiv Jogadiya</p>
                                <p className="text-accent text-[11px] font-semibold">Angular Developer</p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
