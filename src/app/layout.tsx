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
        default: 'Kursus Coding Private & Online di Bali | Uma Coding',
        template: '%s | Uma Coding',
    },
    description:
        'Kursus coding untuk anak, remaja, & dewasa di Bali. Tersedia kelas private, group, offline, & online sesuai usia dan tujuan belajar.',
    keywords: [
        'Kursus coding di Bali',
        'Private coding class Bali',
        'Kursus coding untuk anak',
        'Kelas coding untuk remaja',
        'Kursus coding untuk dewasa',
        'Kelas coding online',
        'Guru coding private ke rumah',
        'coding class Bali',
        'belajar coding Bali',
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
        title: 'Kursus Coding Private & Online di Bali | Uma Coding',
        description:
            'Kursus coding untuk anak, remaja, & dewasa di Bali. Tersedia kelas private, group, offline, & online sesuai usia dan tujuan belajar.',
        url: siteUrl,
        siteName: 'Uma Coding',
        locale: 'id_ID',
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
        title: 'Kursus Coding Private & Online di Bali | Uma Coding',
        description:
            'Kursus coding untuk anak, remaja, & dewasa di Bali. Tersedia kelas private, group, offline, & online sesuai usia dan tujuan belajar.',
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
            <head>
                <link
                    rel="preload"
                    href="/images/logo/logo-color-landscape.webp"
                    as="image"
                    type="image/webp"
                    fetchPriority="high"
                />
            </head>
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
