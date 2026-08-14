'use client';

import Link from 'next/link';
import { Course } from '@/types';
import ProgramCard from '@/components/programs/ProgramCard';
import { useI18n } from '@/components/providers/I18nProvider';

interface Props {
    courses: Course[];
    settings?: Record<string, string>;
}

export default function FeaturedCourses({ courses, settings }: Props) {
    const { t } = useI18n();

    if (!courses || courses.length === 0) return null;

    const featuredLabel = settings?.featured_label || t('Top Picked Courses');
    const featuredTitle = settings?.featured_title || t('Featured Courses');
    const featuredSubtitle = settings?.featured_subtitle || t('Start your coding journey with our best programs tailored for various ages and skill levels.');

    return (
        <section className="dark:bg-darkmode relative overflow-hidden bg-white py-24">
            <div className="container">
                <div
                    className="mb-16 flex flex-col items-center justify-center text-center"
                    data-aos="fade-up"
                >
                    <p className="mb-2 text-lg font-bold text-primary">
                        {featuredLabel}
                    </p>
                    <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-[40px] dark:text-white" id="programs">{featuredTitle}</h2>
                    <p className="text-SlateBlueText dark:text-opacity-80 mx-auto max-w-2xl text-lg">
                        {featuredSubtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <div key={course.id} data-aos="fade-up" data-aos-delay="100">
                            <ProgramCard course={course} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center" data-aos="fade-up">
                    <Link
                        href="/programs"
                        className="btn btn-1 hover-filled-slide-down overflow-hidden rounded-lg"
                    >
                        <span>{t('View All Programs')}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
