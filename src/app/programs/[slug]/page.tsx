import type { Metadata } from 'next';
import HeroSub from '@/components/layout/HeroSub';
import ProgramCard from '@/components/programs/ProgramCard';
import { Course } from '@/types';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getCmsProgramBySlug, getCmsPrograms } from '@/lib/cms';
import ProgramDetailClient from './ProgramDetailClient';

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getProgramDetails(slug: string): Promise<{ course: Course; relatedCourses: Course[] } | null> {
    const cmsProgram = await getCmsProgramBySlug(slug);
    if (!cmsProgram) return null;

    const paginatedCms = await getCmsPrograms();
    const related = (paginatedCms.data || [])
        .filter((p) => p.slug !== slug)
        .map((p) => ({
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

    const course: Course = {
        id: cmsProgram.id,
        title: cmsProgram.title,
        slug: cmsProgram.slug,
        category: cmsProgram.age_group,
        description: cmsProgram.description || cmsProgram.excerpt || '',
        price_text: cmsProgram.price_text,
        image_path: cmsProgram.cover_image_path,
        duration: cmsProgram.duration,
        level: cmsProgram.level,
        is_active: cmsProgram.is_active,
        created_at: cmsProgram.created_at || new Date().toISOString(),
        updated_at: cmsProgram.updated_at || new Date().toISOString(),
        modules: (Array.isArray(cmsProgram.syllabus_highlights) 
            ? cmsProgram.syllabus_highlights 
            : (typeof cmsProgram.syllabus_highlights === 'string' ? cmsProgram.syllabus_highlights.split(',') : [])
        )?.map((highlight, index) => ({
            id: `highlight-${index}`,
            title: typeof highlight === 'string' ? highlight.trim() : String(highlight),
            order: index + 1,
            units: [],
        })),
    };

    return { course, relatedCourses: related };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await getProgramDetails(slug);
    if (!data || !data.course) return { title: 'Program Not Found' };
    const course = data.course;
    const rawDesc = course.description?.replace(/<[^>]*>?/gm, '') || `Learn ${course.title} at Uma Coding Bali.`;
    const cleanDesc = rawDesc.slice(0, 145);
    const image = course.image_path || course.image_url;

    const maxTitleLength = 60;
    const rawTitle = `${course.title} - Coding Course Bali`;
    const metaTitle = rawTitle.length > maxTitleLength
        ? `${rawTitle.substring(0, maxTitleLength - 3)}...`
        : rawTitle;

    return {
        title: {
            absolute: metaTitle,
        },
        description: cleanDesc,
        keywords: [course.title, 'coding class Bali', typeof course.category === 'string' ? course.category : course.category?.name || 'programming course Bali'],
        alternates: {
            canonical: `./`,
        },
        openGraph: {
            title: metaTitle,
            description: cleanDesc,
            images: image ? [{ url: image }] : [],
        },
    };
}

export default async function ProgramDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const data = await getProgramDetails(slug);

    if (!data || !data.course) {
        notFound();
    }

    const { course, relatedCourses } = data;
    const whatsappUrl = 'https://wa.me/6289602402811';
    const imageUrl = course.image_path || course.image_url;

    const breadcrumbs = [
        { href: '/', text: 'Home' },
        { href: '/programs', text: 'Programs' },
        { href: '#', text: course.title },
    ];

    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: course.description?.replace(/<[^>]*>?/gm, '') || course.title,
        provider: {
            '@type': 'Organization',
            name: 'Uma Coding',
            sameAs: 'https://umacoding.com',
        },
        image: imageUrl,
    };

    return (
        <ProgramDetailClient 
            course={course} 
            relatedCourses={relatedCourses} 
            courseSchema={courseSchema} 
        />
    );
}
