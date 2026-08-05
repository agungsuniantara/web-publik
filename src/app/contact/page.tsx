import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch | Uma Coding Bali',
    description:
        'Contact Uma Coding in Bali for coding class inquiries, career opportunities, or mentorship. Visit our head office in Canggu / Kerobokan.',
    keywords: [
        'contact Uma Coding',
        'coding school address Bali',
        'coding class inquiry Bali',
        'private coding tutor Bali contact',
    ],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Contact Us - Get in Touch | Uma Coding Bali',
        description:
            'Contact Uma Coding in Bali for coding class inquiries, career opportunities, or mentorship.',
        url: 'https://umacoding.com/contact',
    },
};

export default function ContactPage() {
    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Uma Coding',
        url: 'https://umacoding.com/contact',
        mainEntity: {
            '@type': 'EducationalOrganization',
            name: 'Uma Coding',
            telephone: '+62 812-3456-7890',
            email: 'info@umacoding.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Uma Coding No. 88',
                addressLocality: 'Canggu, Kuta Utara',
                addressRegion: 'Bali',
                postalCode: '80361',
                addressCountry: 'ID',
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <ContactClient />
        </>
    );
}
