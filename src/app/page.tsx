import Hero from '@/components/home/Hero';
import Conferences from '@/components/home/Conferences';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import WhyChoose from '@/components/home/WhyChoose';
import FaqSection from '@/components/home/FaqSection';
import { Course } from '@/types';
import { createWebSiteSchema, createEducationalOrganizationSchema } from '@/lib/jsonld';

async function getFeaturedCourses(): Promise<Course[]> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/public';
    try {
        const res = await fetch(`${apiUrl}/featured-courses`, {
            cache: 'no-store',
        });
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch featured courses:', error);
        return [];
    }
}

export default async function HomePage() {
    const courses = await getFeaturedCourses();
    const siteSchema = createWebSiteSchema();
    const eduSchema = createEducationalOrganizationSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eduSchema) }}
            />
            <Hero />
            <Conferences />
            <FeaturedCourses courses={courses} />
            <WhyChoose courses={courses} />
            <FaqSection />
        </>
    );
}
