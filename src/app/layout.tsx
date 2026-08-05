import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AosProvider from '@/components/providers/AosProvider';
import I18nProvider from '@/components/providers/I18nProvider';

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://umacoding.com';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Coding School Bali | Coding Classes for Kids & Teens - Uma Coding',
        template: '%s - Uma Coding',
    },
    description:
        'Uma Coding offers coding classes, game development, and programming bootcamps for kids, teens, and adults in Bali.',
    keywords: [
        'coding school Bali',
        'coding class Bali',
        'coding class for kids Bali',
        'programming bootcamp Bali',
        'Scratch coding Bali',
        'Roblox coding class Bali',
        'Python coding class Bali',
        'Java course Bali',
        'full stack developer course Bali',
        'private coding tutor Bali',
    ],
    authors: [{ name: 'Uma Coding', url: siteUrl }],
    creator: 'Uma Coding',
    publisher: 'Uma Coding',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Coding School Bali | Coding Classes for Kids & Teens - Uma Coding',
        description:
            'Uma Coding offers coding classes, game development, and programming bootcamps for kids, teens, and adults in Bali.',
        url: siteUrl,
        siteName: 'Uma Coding',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `${siteUrl}/images/og/uma-coding-default-og.jpg`,
                width: 1200,
                height: 630,
                alt: 'Uma Coding Bali',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coding School Bali | Coding Classes for Kids & Teens - Uma Coding',
        description:
            'Uma Coding offers coding classes, game development, and programming bootcamps for kids, teens, and adults in Bali.',
        site: '@umacoding',
        images: [`${siteUrl}/images/og/uma-coding-default-og.jpg`],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id" className={`${instrumentSans.variable} h-full antialiased dark`}>
            <body className="home-layout flex min-h-full flex-col bg-background text-foreground">
                <I18nProvider>
                    <AosProvider>
                        <Header />
                        <main className="flex-grow pt-24">{children}</main>
                        <Footer />
                    </AosProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
