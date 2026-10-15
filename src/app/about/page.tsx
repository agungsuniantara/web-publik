import type { Metadata } from 'next';
import AboutClient from './AboutClient';
import { getCmsSettings } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Tentang Kami - Kursus Coding di Bali',
    description:
        'Pelajari tentang Uma Coding, penyedia kursus coding untuk anak, remaja, & dewasa di Bali. Memberdayakan inovator muda dengan pemrograman.',
    keywords: [
        'kursus coding Bali',
        'tentang uma coding',
        'private coding class Bali',
        'kids programming school Bali',
    ],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Tentang Kami - Kursus Coding di Bali',
        description:
            'Pelajari tentang Uma Coding, penyedia kursus coding untuk anak, remaja, & dewasa di Bali. Memberdayakan inovator muda dengan pemrograman.',
        url: 'https://umacoding.com/about',
    },
};

export default async function AboutPage() {
    const settings = await getCmsSettings();

    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Uma Coding Bali',
        description:
            settings.about_subtitle || 'Uma Coding is dedicated to nurturing young innovators in a supportive, private environment where learning to code is a journey of growth.',
        url: 'https://umacoding.com/about',
        mainEntity: {
            '@type': 'EducationalOrganization',
            name: 'Uma Coding',
            url: 'https://umacoding.com',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <AboutClient settings={settings} />
        </>
    );
}
