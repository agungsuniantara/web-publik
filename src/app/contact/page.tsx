import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { getCmsSettings } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch',
    description:
        'Hubungi Uma Coding di Bali untuk informasi kursus coding, pendaftaran, atau konsultasi private coding class ke rumah.',
    keywords: [
        'contact Uma Coding',
        'kursus coding Bali',
        'konsultasi coding class',
        'private coding tutor Bali contact',
    ],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Contact Us - Get in Touch',
        description:
            'Hubungi Uma Coding di Bali untuk informasi kursus coding, pendaftaran, atau konsultasi private coding class ke rumah.',
        url: 'https://umacoding.com/contact',
    },
};

export default async function ContactPage() {
    const settings = await getCmsSettings();
    const phone = settings.contact_phone || '+62 896-0240-2811';
    const email = settings.contact_email || 'info@umacoding.com';
    const address = settings.contact_address || 'Melayani private coding class ke rumah, kelas offline, dan kelas online di Bali';

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Uma Coding',
        url: 'https://umacoding.com/contact',
        mainEntity: {
            '@type': 'EducationalOrganization',
            name: 'Uma Coding',
            telephone: phone,
            email: email,
            address: {
                '@type': 'PostalAddress',
                streetAddress: address,
                addressLocality: 'Denpasar',
                addressRegion: 'Bali',
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
            <ContactClient settings={settings} />
        </>
    );
}
