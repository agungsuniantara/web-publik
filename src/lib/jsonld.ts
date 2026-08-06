export const defaultOrganization = {
    '@type': 'Organization',
    name: 'Uma Coding',
    url: 'https://umacoding.com',
    logo: 'https://umacoding.com/logo.png',
    sameAs: [
        'https://www.facebook.com/umacoding',
        'https://www.instagram.com/umacoding',
        'https://www.youtube.com/@umacoding',
    ],
};

export function createWebSiteSchema(siteUrl = 'https://umacoding.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Uma Coding',
        url: siteUrl,
        description: 'Kursus Coding untuk Anak, Remaja & Dewasa di Bali',
        publisher: defaultOrganization,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/programs?search={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}

export function createEducationalOrganizationSchema(siteUrl = 'https://umacoding.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Uma Coding Bali',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description: 'Kursus coding untuk anak, remaja, dan dewasa. Tersedia kelas private ke rumah, small group, offline, dan online di Bali.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Melayani private coding class ke rumah, kelas offline, dan kelas online di Bali',
            addressLocality: 'Denpasar',
            addressRegion: 'Bali',
            addressCountry: 'ID',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -8.65,
            longitude: 115.16,
        },
        sameAs: [
            'https://www.facebook.com/umacoding',
            'https://www.instagram.com/umacoding',
        ],
    };
}

export function createFAQPageSchema(items: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}
