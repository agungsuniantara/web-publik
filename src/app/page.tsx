import Hero from '@/components/home/Hero';
import TargetAudience from '@/components/home/TargetAudience';
import LearningMethods from '@/components/home/LearningMethods';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import WhyChoose from '@/components/home/WhyChoose';
import FaqSection from '@/components/home/FaqSection';
import { Course } from '@/types';
import { createWebSiteSchema, createEducationalOrganizationSchema } from '@/lib/jsonld';
import { getCmsPrograms, getCmsSettings } from '@/lib/cms';

export const dynamic = 'force-dynamic';

async function getFeaturedCourses(): Promise<Course[]> {
    const paginatedCms = await getCmsPrograms();
    const cmsPrograms = paginatedCms.data || [];
    return cmsPrograms.map((p) => ({
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
}

export default async function HomePage() {
    const [courses, settings] = await Promise.all([
        getFeaturedCourses(),
        getCmsSettings(),
    ]);

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
            <Hero settings={settings} />
            <TargetAudience settings={settings} />
            <LearningMethods settings={settings} />
            <FeaturedCourses courses={courses} settings={settings} />
            <WhyChoose courses={courses} settings={settings} />
            <FaqSection settings={settings} />
        </>
    );
}
