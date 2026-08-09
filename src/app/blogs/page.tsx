import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSub from '@/components/layout/HeroSub';
import BlogCard from '@/components/blogs/BlogCard';
import BlogCategoryFilter from '@/components/blogs/BlogCategoryFilter';
import { Blog, PaginatedData } from '@/types';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCmsBlogs } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
    searchParams: Promise<{ search?: string; category?: string; page?: string; per_page?: string }>;
}

async function getBlogs(category?: string, search?: string, page?: string, perPage?: string): Promise<PaginatedData<Blog>> {
    return getCmsBlogs(category, search, page, perPage);
}

export default async function BlogsPage({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || '';
    const category = resolvedSearchParams?.category || 'all';
    const page = resolvedSearchParams?.page || '1';
    const perPage = resolvedSearchParams?.per_page || '12';

    const paginatedBlogs = await getBlogs(category, search, page, perPage);
    const posts = paginatedBlogs.data || [];

    const breadcrumbs = [
        { href: '/', text: 'Beranda' },
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
                title="Artikel & Blog Coding"
                description="Temukan panduan, tips, dan wawasan seputar dunia pemrograman untuk anak-anak, remaja, dan orang tua."
                breadcrumbLinks={breadcrumbs}
                className="pb-24 md:pb-32"
                titleClassName="max-w-3xl"
            />

            <section className="bg-IcyBreeze dark:bg-darkmode relative z-10 -mt-12 pt-20 pb-20">
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
                            placeholder="Cari artikel blog..."
                            className="text-secondary placeholder:text-SlateBlueText dark:bg-darklight dark:border-gray-800 w-full rounded-full border border-gray-200 bg-white py-5 pr-6 pl-16 text-lg shadow-[0px_6px_10px_0px_#00000026] transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none dark:text-white"
                        />
                        <input type="hidden" name="category" value={category} />
                    </form>
                </div>

                <div className="container relative pt-12 md:pt-14" id="blog">
                    {/* Category Filter Tabs */}
                    <div className="mb-12" data-aos="fade-up">
                        <BlogCategoryFilter activeCategory={category} searchQuery={search} />
                    </div>

                    <div className="mb-16">
                        {posts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <div key={post.id}>
                                            <BlogCard blog={post} />
                                        </div>
                                    ))}
                                </div>

                                {paginatedBlogs.last_page > 1 && (
                                    <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
                                        {paginatedBlogs.current_page > 1 && (
                                            <Link
                                                href={`/blogs?category=${encodeURIComponent(category)}&page=${paginatedBlogs.current_page - 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                                                scroll={false}
                                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-primary hover:text-white dark:border-gray-800 dark:bg-darklight dark:text-gray-300"
                                                aria-label="Previous Page"
                                            >
                                                <ChevronLeft className="h-5 w-5" />
                                            </Link>
                                        )}

                                        {Array.from({ length: paginatedBlogs.last_page }, (_, i) => i + 1).map((pageNum) => (
                                            <Link
                                                key={pageNum}
                                                href={`/blogs?category=${encodeURIComponent(category)}&page=${pageNum}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                                                scroll={false}
                                                className={`flex h-11 min-w-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold shadow-sm transition ${
                                                    pageNum === paginatedBlogs.current_page
                                                        ? 'bg-primary text-white'
                                                        : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-darklight dark:text-gray-300 dark:hover:bg-gray-800'
                                                }`}
                                            >
                                                {pageNum}
                                            </Link>
                                        ))}

                                        {paginatedBlogs.current_page < paginatedBlogs.last_page && (
                                            <Link
                                                href={`/blogs?category=${encodeURIComponent(category)}&page=${paginatedBlogs.current_page + 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                                                scroll={false}
                                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-primary hover:text-white dark:border-gray-800 dark:bg-darklight dark:text-gray-300"
                                                aria-label="Next Page"
                                            >
                                                <ChevronRight className="h-5 w-5" />
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="py-16 text-center">
                                <p className="text-SlateBlueText dark:text-gray-400 text-lg">
                                    Tidak ada artikel yang ditemukan sesuai pilihan Anda.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
