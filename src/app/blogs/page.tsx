import type { Metadata } from 'next';
import HeroSub from '@/components/layout/HeroSub';
import BlogCard from '@/components/blogs/BlogCard';
import { Blog, PaginatedData } from '@/types';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Coding Blog: Tips, Guides & Insights',
    description:
        'Discover coding articles for parents, kids, and teens in Bali. Learn about Scratch, Roblox, Python, Java, and tips for choosing the right class.',
    keywords: [
        'coding blog Bali',
        'programming guide for kids',
        'Scratch coding tips',
        'Roblox game dev guide',
        'coding class guide parents Bali',
    ],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Coding Blog: Tips, Guides & Insights',
        description:
            'Discover coding articles for parents, kids, and teens in Bali. Learn about Scratch, Roblox, Python, Java, and tips for choosing the right class.',
        url: 'https://umacoding.com/blogs',
    },
};

interface PageProps {
    searchParams: Promise<{ search?: string; page?: string }>;
}

async function getBlogs(search?: string, page?: string): Promise<PaginatedData<Blog>> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/public';
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (page) params.append('page', page);

    try {
        const res = await fetch(`${apiUrl}/blogs?${params.toString()}`, {
            cache: 'no-store',
        });
        if (!res.ok) return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
    }
}

export default async function BlogsPage({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || '';
    const page = resolvedSearchParams?.page || '1';

    const paginatedBlogs = await getBlogs(search, page);
    const posts = paginatedBlogs.data || [];

    const breadcrumbs = [
        { href: '/', text: 'Home' },
        { href: '/blogs', text: 'Blog' },
    ];

    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Coding Blog & Articles at Uma Coding Bali',
        url: 'https://umacoding.com/blogs',
        description: 'Read tips, guides, and tutorials on coding for kids, teens, and parents in Bali.',
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: posts.map((p, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: p.title,
                url: `https://umacoding.com/blogs/${p.slug}`,
            })),
        },
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <HeroSub
                headingType="h1"
                title="Coding Blog: Tips, Guides & Insights for Parents and Students"
                description="Discover coding articles tailored for parents, kids, and teens in Bali — from Scratch and Roblox basics to Python, Data Science, Java, full stack development, and tips for choosing the right coding class."
                breadcrumbLinks={breadcrumbs}
                className="pb-24 md:pb-32"
                titleClassName="max-w-3xl"
            />

            <section className="bg-IcyBreeze dark:bg-darkmode relative z-10 -mt-12 pt-24 pb-20">
                {/* Floating Search Bar */}
                <div
                    className="absolute top-0 right-0 left-0 z-20 flex -translate-y-1/2 justify-center px-4"
                    data-aos="fade-up"
                >
                    <form action="/blogs" method="GET" className="relative w-full max-w-2xl">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
                            <Search className="text-SlateBlueText h-6 w-6" />
                        </div>
                        <input
                            type="text"
                            name="search"
                            defaultValue={search}
                            placeholder="Search articles..."
                            className="text-secondary placeholder:text-SlateBlueText dark:bg-darklight dark:border-gray-800 w-full rounded-full border border-gray-200 bg-white py-5 pr-6 pl-16 text-lg shadow-[0px_6px_10px_0px_#00000026] transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none dark:text-white"
                        />
                    </form>
                </div>

                <div className="container relative" id="blog">
                    <div className="mb-16">
                        {posts.length > 0 ? (
                            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                        data-aos-duration="1000"
                                    >
                                        <BlogCard blog={post} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center text-gray-500">
                                <p>No articles found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
