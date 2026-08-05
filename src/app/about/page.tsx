import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Us - Empowering Young Innovators | Uma Coding Bali',
    description:
        'Learn about Uma Coding, the premier coding school for kids and teens in Bali. Empowering young innovators with logic, programming skills, and career readiness.',
    keywords: [
        'about Uma Coding',
        'coding school Bali',
        'coding mentor Bali',
        'private coding class Bali',
        'kids programming school Bali',
    ],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'About Us - Empowering Young Innovators | Uma Coding Bali',
        description:
            'Learn about Uma Coding, the premier coding school for kids and teens in Bali.',
        url: 'https://umacoding.com/about',
    },
};

export default function AboutPage() {
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Uma Coding Bali',
        description:
            'Uma Coding is dedicated to nurturing young innovators in a supportive, private environment where learning to code is a journey of growth.',
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
            <AboutClient />
        </>
    );
}
