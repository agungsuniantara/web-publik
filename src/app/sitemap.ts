import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://umacoding.com';
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/public';

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/programs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const dynamicRoutes: MetadataRoute.Sitemap = [];

    try {
        const [programsRes, blogsRes] = await Promise.all([
            fetch(`${apiUrl}/programs`, { cache: 'no-store' }),
            fetch(`${apiUrl}/blogs`, { cache: 'no-store' }),
        ]);

        if (programsRes.ok) {
            const programsData = await programsRes.json();
            const programs = programsData.data || programsData;
            if (Array.isArray(programs)) {
                dynamicRoutes.push(
                    ...programs.map((item: { slug: string; updated_at?: string }) => ({
                        url: `${siteUrl}/programs/${item.slug}`,
                        lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
                        changeFrequency: 'weekly' as const,
                        priority: 0.8,
                    }))
                );
            }
        }

        if (blogsRes.ok) {
            const blogsData = await blogsRes.json();
            const blogs = blogsData.data || blogsData;
            if (Array.isArray(blogs)) {
                dynamicRoutes.push(
                    ...blogs.map((item: { slug: string; updated_at?: string; published_at?: string }) => ({
                        url: `${siteUrl}/blogs/${item.slug}`,
                        lastModified: item.updated_at || item.published_at ? new Date(item.updated_at || item.published_at!) : new Date(),
                        changeFrequency: 'weekly' as const,
                        priority: 0.7,
                    }))
                );
            }
        }
    } catch (e) {
        console.error('Sitemap dynamic routes fetch error:', e);
    }

    return [...staticRoutes, ...dynamicRoutes];
}
