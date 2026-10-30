import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import '../styles/tailwind.css';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-plus-jakarta',
    display: 'swap',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: 'Parthiv Jogadiya — Angular Developer & BCA Graduate',
    description:
        'Portfolio of Parthiv Jogadiya — Angular Developer at Elpiora Tech Solutions Pvt. Ltd., formerly at Tagline Infotech LLP, and BCA graduate from Veer Narmad South Gujarat University.',
    openGraph: {
        title: 'Parthiv Jogadiya — Angular Developer',
        description: 'Angular Developer at Elpiora Tech Solutions Pvt. Ltd. and BCA graduate.',
        images: [{ url: '/assets/images/app_logo.jpg', width: 1200, height: 630 }],
    },
    icons: {
        icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={plusJakarta.variable}>
            <body className={plusJakarta.className}>
                {children}

                <Script
                    src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fparthivpor3244back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.21"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://static.rocket.new/rocket-shot.js?v=0.0.3"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    );
}
