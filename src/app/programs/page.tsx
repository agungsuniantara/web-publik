import type { Metadata } from 'next';
import HeroSub from '@/components/layout/HeroSub';
import ProgramCard from '@/components/programs/ProgramCard';
import { Course, PaginatedData } from '@/types';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

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
    searchParams: Promise<{ search?: string; page?: string }>;
}

async function getPrograms(search?: string, page?: string): Promise<PaginatedData<Course>> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/public';
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (page) params.append('page', page);

    try {
        const res = await fetch(`${apiUrl}/programs?${params.toString()}`, {
            cache: 'no-store',
        });
        if (!res.ok) return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch programs:', error);
        return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
    }
}

export default async function ProgramsPage({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || '';
    const page = resolvedSearchParams?.page || '1';

    const paginatedCourses = await getPrograms(search, page);
    const courses = paginatedCourses.data || [];

    const breadcrumbs = [
        { href: '/', text: 'Home' },
        { href: '/programs', text: 'Programs' },
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
                title="Our Programs"
                description="Explore our range of coding programs designed for kids, teens, and adults of all skill levels."
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
                            placeholder="Search for courses..."
                            className="text-secondary placeholder:text-SlateBlueText dark:bg-darklight dark:border-gray-800 w-full rounded-full border border-gray-200 bg-white py-5 pr-6 pl-16 text-lg shadow-[0px_6px_10px_0px_#00000026] transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none dark:text-white"
                        />
                    </form>
                </div>

                <div className="container relative" id="programs">
                    <div className="mb-16">
                        {courses.length > 0 ? (
                            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                                {courses.map((course) => (
                                    <div key={course.id} data-aos="fade-up" data-aos-delay="100">
                                        <ProgramCard course={course} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center text-gray-500">
                                <p>No programs found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
