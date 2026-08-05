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
        description: 'Coding Classes for Kids & Teens in Bali',
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
        description: 'Coding classes, game development, and programming bootcamps for kids and teens in Bali.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Raya Kerobokan No. 88',
            addressLocality: 'Kuta Utara',
            addressRegion: 'Bali',
            postalCode: '80361',
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
