import type { Metadata } from 'next';
import { Blog } from '@/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCmsBlogBySlug } from '@/lib/cms';
import { formatMetaTitle } from '@/lib/utils';

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getBlogDetails(slug: string): Promise<Blog | null> {
    return getCmsBlogBySlug(slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogDetails(slug);
    if (!post) return { title: 'Article Not Found' };
    const rawExcerpt = post.excerpt || post.content?.replace(/<[^>]*>?/gm, '') || post.title;
    const cleanExcerpt = rawExcerpt.slice(0, 145);
    const coverImage = post.cover_image_path || post.cover_image;

    const metaTitle = formatMetaTitle(post.title, 52);

    return {
        title: {
            absolute: metaTitle,
        },
        description: cleanExcerpt,
        authors: [{ name: post.author?.name || 'Uma Coding' }],
        alternates: {
            canonical: `./`,
        },
        openGraph: {
            title: metaTitle,
            description: cleanExcerpt,
            type: 'article',
            publishedTime: post.published_at || post.created_at,
            authors: [post.author?.name || 'Uma Coding'],
            images: coverImage ? [{ url: coverImage }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: cleanExcerpt,
            images: coverImage ? [coverImage] : [],
        },
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getBlogDetails(slug);

    if (!post) {
        notFound();
    }

    const imageUrl = post.cover_image_path || post.cover_image;
    const formattedDate = new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const shareUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://umacoding.com';
    const postUrl = `${shareUrl}/blog/${post.slug}`;

    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt || post.content?.replace(/<[^>]*>?/gm, '').slice(0, 160),
        image: imageUrl,
        datePublished: post.published_at || post.created_at,
        dateModified: post.updated_at || post.created_at,
        author: {
            '@type': 'Person',
            name: post.author?.name || 'Uma Coding',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Uma Coding',
            logo: {
                '@type': 'ImageObject',
                url: `${shareUrl}/logo.png`,
            },
        },
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />

            {/* Header / Title Section */}
            <div className="bg-white py-12 dark:bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
                        {post.published_at && (
                            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                                {formattedDate}
                            </span>
                        )}
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl dark:text-white">
                            {(() => {
                                let shortTitle = post.title;
                                if (shortTitle.includes(':')) {
                                    shortTitle = shortTitle.split(':')[0];
                                } else if (shortTitle.includes('?')) {
                                    shortTitle = shortTitle.split('?')[0] + '?';
                                }
                                if (shortTitle.length > 70) {
                                    shortTitle = shortTitle.substring(0, 67) + '...';
                                }
                                return shortTitle;
                            })()}
                        </h1>

                        <div className="flex items-center justify-center gap-4">
                            <img
                                src={
                                    post.author?.avatar ||
                                    `https://ui-avatars.com/api/?background=random&name=${encodeURIComponent(post.author?.name || 'Author')}`
                                }
                                alt="Author"
                                className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                            />
                            <div className="text-left">
                                <p className="text-base font-bold text-secondary dark:text-white">
                                    {post.author?.name || 'Uma Coding'}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Author
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Section */}
            <section className="pt-0! pb-20">
                <div className="container mx-auto px-4">
                    {imageUrl && (
                        <div
                            className="mx-auto mb-16 max-w-6xl overflow-hidden rounded-2xl shadow-xl"
                            data-aos="fade-up"
                        >
                            <img
                                src={imageUrl}
                                alt={post.title}
                                className="h-full max-h-[600px] w-full object-cover object-center transition duration-500 hover:scale-105"
                            />
                        </div>
                    )}

                    <div className="flex flex-wrap lg:flex-nowrap lg:gap-12">
                        {/* Main Article Body (8/12) */}
                        <div className="w-full lg:w-8/12">
                            <article className="rounded-2xl lg:p-4" data-aos="fade-up">
                                {post.content && (
                                    <div
                                        className="isolated-prose text-SlateBlueText text-lg leading-relaxed dark:text-gray-300"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                )}
                            </article>

                            <div className="mt-8">
                                <Link
                                    href="/blog"
                                    className="btn_outline btn-2 hover-outline-slide-down rounded-lg"
                                >
                                    <span className="!px-6 !py-3">← Back to Articles</span>
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar (4/12) */}
                        <aside className="mt-12 w-full lg:mt-0 lg:w-4/12" data-aos="fade-left">
                            <div className="sticky top-28 space-y-8">
                                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-darklight">
                                    <h3 className="mb-6 text-xl font-bold text-secondary dark:text-white">
                                        Share this article
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#1877F2] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1877F2]/90 hover:shadow-md"
                                        >
                                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.651-2.797 4.16v1.812h3.349l-1 3.667h-2.349v7.98c-1.287.166-2.607.166-3.894 0v-.001z" />
                                            </svg>
                                            Facebook
                                        </a>

                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-md dark:bg-white dark:text-black dark:hover:bg-gray-200"
                                        >
                                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                            X (Twitter)
                                        </a>

                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0077B5] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0077B5]/90 hover:shadow-md"
                                        >
                                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                                            </svg>
                                            LinkedIn
                                        </a>

                                        <a
                                            href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${postUrl}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#25D366]/90 hover:shadow-md"
                                        >
                                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center dark:border-gray-800 dark:bg-darklight">
                                    <p className="text-SlateBlueText text-sm dark:text-gray-400">
                                        Enjoyed this article? Share it with your friends!
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
