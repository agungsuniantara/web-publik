import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSub from '@/components/layout/HeroSub';
import ProgramCard from '@/components/programs/ProgramCard';
import { Course, PaginatedData } from '@/types';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCmsPrograms } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
    title: 'Program Kursus Coding Terbaik di Bali',
    description:
        'Jelajahi berbagai pilihan program kursus coding di Bali untuk anak, remaja, dan dewasa.',
    keywords: [
        'program coding Bali',
        'kursus coding Bali',
        'private coding class',
        'coding untuk anak',
        'belajar coding',
    ],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Program Kursus Coding Terbaik di Bali',
        description:
            'Jelajahi berbagai pilihan program kursus coding di Bali untuk anak, remaja, dan dewasa.',
        url: 'https://umacoding.com/programs',
    },
};

interface PageProps {
    searchParams: Promise<{ search?: string; page?: string; per_page?: string }>;
}

async function getPrograms(search?: string, page?: string, perPage?: string): Promise<PaginatedData<Course>> {
    // Default to 100 per page so all 12 programs show up completely on 1 page without being hidden
    const effectivePerPage = perPage || '12';
    const cmsPaginated = await getCmsPrograms(undefined, search, page, effectivePerPage);
    const mappedCourses: Course[] = (cmsPaginated.data || []).map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        category: p.age_group,
        description: p.description || p.excerpt || '',
        price_text: p.price_text,
        image_path: p.cover_image_path,
        duration: p.duration,
        level: p.level,
        is_active: p.is_active,
        created_at: p.created_at || new Date().toISOString(),
        updated_at: p.updated_at || new Date().toISOString(),
    }));

    return {
        ...cmsPaginated,
        data: mappedCourses,
    };
}

export default async function ProgramsPage({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || '';
    const page = resolvedSearchParams?.page || '1';
    const perPage = resolvedSearchParams?.per_page || '12';

    const paginatedPrograms = await getPrograms(search, page, perPage);
    const courses = paginatedPrograms.data || [];

    const breadcrumbs = [
        { href: '/', text: 'Beranda' },
        { href: '/programs', text: 'Program' },
    ];

    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Program Kursus Coding di Uma Coding',
        url: 'https://umacoding.com/programs',
        description: 'Jelajahi semua program kursus coding untuk anak, remaja, dan dewasa.',
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: courses.map((c, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: c.title,
                url: `https://umacoding.com/programs/${c.slug}`,
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
                title="Program Kami"
                description="Jelajahi berbagai pilihan program kursus coding interaktif yang dirancang khusus untuk anak-anak, remaja, dan dewasa."
                breadcrumbLinks={breadcrumbs}
                className="pb-24 md:pb-32"
            />

            <section className="bg-IcyBreeze dark:bg-darkmode relative z-10 -mt-12 pt-24 pb-20">
                {/* Floating Search Bar */}
                <div
                    className="absolute top-0 right-0 left-0 z-20 flex -translate-y-1/2 justify-center px-4"
                    data-aos="fade-up"
                >
                    <form action="/programs" method="GET" className="relative w-full max-w-2xl">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
                            <Search className="text-SlateBlueText h-6 w-6" />
                        </div>
                        <input
                            type="text"
                            name="search"
                            defaultValue={search}
                            placeholder="Cari program kursus..."
                            className="text-secondary placeholder:text-SlateBlueText dark:bg-darklight dark:border-gray-800 w-full rounded-full border border-gray-200 bg-white py-5 pr-6 pl-16 text-lg shadow-[0px_6px_10px_0px_#00000026] transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none dark:text-white"
                        />
                    </form>
                </div>

                <div className="container relative" id="programs">
                    <div className="mb-16">
                        {courses.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                                    {courses.map((course) => (
                                        <div key={course.id} data-aos="fade-up" data-aos-delay="100">
                                            <ProgramCard course={course} />
                                        </div>
                                    ))}
                                </div>

                                {paginatedPrograms.last_page > 1 && (
                                    <div className="mt-14 flex items-center justify-center gap-2">
                                        {paginatedPrograms.current_page > 1 && (
                                            <Link
                                                href={`/programs?page=${paginatedPrograms.current_page - 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-primary hover:text-white dark:border-gray-800 dark:bg-darklight dark:text-gray-300"
                                                aria-label="Previous Page"
                                            >
                                                <ChevronLeft className="h-5 w-5" />
                                            </Link>
                                        )}

                                        {Array.from({ length: paginatedPrograms.last_page }, (_, i) => i + 1).map((pageNum) => (
                                            <Link
                                                key={pageNum}
                                                href={`/programs?page=${pageNum}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                                                className={`flex h-11 min-w-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold shadow-sm transition ${
                                                    pageNum === paginatedPrograms.current_page
                                                        ? 'bg-primary text-white'
                                                        : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-darklight dark:text-gray-300 dark:hover:bg-gray-800'
                                                }`}
                                            >
                                                {pageNum}
                                            </Link>
                                        ))}

                                        {paginatedPrograms.current_page < paginatedPrograms.last_page && (
                                            <Link
                                                href={`/programs?page=${paginatedPrograms.current_page + 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
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
                            <div className="py-12 text-center text-gray-500">
                                <p>Tidak ada program yang sesuai dengan pencarian Anda.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
