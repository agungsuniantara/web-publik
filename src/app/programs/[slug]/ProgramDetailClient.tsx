'use client';

import React from 'react';
import HeroSub from '@/components/layout/HeroSub';
import ProgramCard from '@/components/programs/ProgramCard';
import { Course } from '@/types';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { useI18n } from '@/components/providers/I18nProvider';

interface ProgramDetailClientProps {
    course: Course;
    relatedCourses: Course[];
    courseSchema: any;
}

export default function ProgramDetailClient({ course, relatedCourses, courseSchema }: ProgramDetailClientProps) {
    const { t } = useI18n();
    const whatsappUrl = 'https://wa.me/6289602402811';
    const imageUrl = course.image_path || course.image_url;

    const breadcrumbs = [
        { href: '/', text: t('Home') || 'Home' },
        { href: '/programs', text: t('Programs') || 'Programs' },
        { href: '#', text: course.title },
    ];

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <HeroSub
                headingType="h1"
                title={(() => {
                    let shortTitle = course.title;
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
                description={t('Take your skills to the next level.') || "Take your skills to the next level."}
                breadcrumbLinks={breadcrumbs}
                className="pb-12 md:pb-20"
            />

            <section className="bg-IcyBreeze dark:bg-darkmode relative z-10 -mt-8 min-h-screen rounded-t-[2.5rem] pt-14 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Main Content (2/3) */}
                        <div className="space-y-8 lg:col-span-2">
                            {/* Description & Overview */}
                            <div
                                className="dark:bg-darklight/60 rounded-[1.375rem] border border-white/20 bg-white/60 p-8 shadow-sm backdrop-blur-md"
                                data-aos="fade-up"
                            >
                                <h2 className="text-secondary mb-6 flex items-center gap-3 text-[1.75rem] font-bold leading-[1.2] dark:text-white">
                                    <BookOpen className="text-primary size-6" />
                                    {t('About this Program') || 'About this Program'}
                                </h2>
                                {course.description && (
                                    <div
                                        className="isolated-prose text-SlateBlueText text-lg leading-relaxed dark:text-opacity-80"
                                        dangerouslySetInnerHTML={{ __html: course.description }}
                                    />
                                )}
                            </div>

                            {/* Why Choose Section */}
                            <div data-aos="fade-up">
                                <h2 className="text-secondary mb-6 text-[1.75rem] font-bold dark:text-white">
                                    {t('Why Choose This Program?') || 'Why Choose This Program?'}
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                        <div className="bg-PaleCyan/30 text-primary mb-4 flex size-12 items-center justify-center rounded-full">
                                            <CheckCircle className="size-6" />
                                        </div>
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Expert Instructors') || 'Expert Instructors'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('Learn from industry veterans with years of real-world experience and proven track records.') || 'Learn from industry veterans with years of real-world experience and proven track records.'}
                                        </p>
                                    </div>

                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                        <div className="bg-PaleCyan/30 text-primary mb-4 flex size-12 items-center justify-center rounded-full">
                                            <BookOpen className="size-6" />
                                        </div>
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Comprehensive Curriculum') || 'Comprehensive Curriculum'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('Structured learning path designed to cover all essential topics from basics to advanced.') || 'Structured learning path designed to cover all essential topics from basics to advanced.'}
                                        </p>
                                    </div>

                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                        <div className="bg-PaleCyan/30 text-primary mb-4 flex size-12 items-center justify-center rounded-full">
                                            <Clock className="size-6" />
                                        </div>
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Flexible Schedule') || 'Flexible Schedule'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('Learn at your own pace with lifetime access to materials, anytime, anywhere.') || 'Learn at your own pace with lifetime access to materials, anytime, anywhere.'}
                                        </p>
                                    </div>

                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                        <div className="bg-PaleCyan/30 text-primary mb-4 flex size-12 items-center justify-center rounded-full">
                                            <CheckCircle className="size-6" />
                                        </div>
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Certified') || 'Certified'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('Earn a recognized certificate upon successful completion to boost your resume.') || 'Earn a recognized certificate upon successful completion to boost your resume.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* FAQ Section */}
                            <div data-aos="fade-up">
                                <h2 className="text-secondary mb-6 text-[1.75rem] font-bold dark:text-white">
                                    {t('Frequently Asked Questions') || 'Frequently Asked Questions'}
                                </h2>
                                <div className="space-y-4">
                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Do I need any prior coding experience?') || 'Do I need any prior coding experience?'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('No prior experience is required for most of our beginner programs. Our mentors will guide you step-by-step from the very basics.') || 'No prior experience is required for most of our beginner programs. Our mentors will guide you step-by-step from the very basics.'}
                                        </p>
                                    </div>
                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('What equipment do I need?') || 'What equipment do I need?'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('You will need a laptop or computer with a stable internet connection. Specific software requirements will be communicated before the class starts.') || 'You will need a laptop or computer with a stable internet connection. Specific software requirements will be communicated before the class starts.'}
                                        </p>
                                    </div>
                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Are the classes private or in a group?') || 'Are the classes private or in a group?'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('We offer both options! You can choose 1-on-1 private sessions for personalized learning or join a small group class.') || 'We offer both options! You can choose 1-on-1 private sessions for personalized learning or join a small group class.'}
                                        </p>
                                    </div>
                                    <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                                        <h4 className="text-secondary mb-2 text-lg font-bold dark:text-white">
                                            {t('Can the mentor come to my house?') || 'Can the mentor come to my house?'}
                                        </h4>
                                        <p className="text-SlateBlueText text-sm">
                                            {t('Yes, we provide offline home-visit sessions for students located in the Bali area. Online classes are also available.') || 'Yes, we provide offline home-visit sessions for students located in the Bali area. Online classes are also available.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Programs */}
                            {relatedCourses && relatedCourses.length > 0 && (
                                <div data-aos="fade-up">
                                    <h2 className="text-secondary mb-6 text-[1.75rem] font-bold dark:text-white">
                                        {t('Related Programs') || 'Related Programs'}
                                    </h2>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {relatedCourses.map((c) => (
                                            <ProgramCard key={c.id} course={c} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Info Card */}
                        <div className="space-y-6" data-aos="fade-left">
                            <div className="dark:bg-darklight sticky top-24 overflow-hidden rounded-[1.375rem] border-none bg-white shadow-[0px_6px_10px_0px_#00000026]">
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt={course.title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="bg-primary/10 text-primary flex h-full w-full items-center justify-center">
                                            <span className="text-6xl font-bold opacity-30">
                                                {course.title.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                    {course.category && (
                                        <div className="absolute top-4 right-4">
                                            <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
                                                {typeof course.category === 'string' ? course.category : course.category.name}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6 p-6">
                                    <div className="space-y-4">
                                        <div className="border-SlateBlueText/30 flex items-center justify-between border-b border-dashed pb-4 text-base">
                                            <span className="text-SlateBlueText flex items-center gap-3 font-medium">
                                                <Clock className="size-5" /> {t('Duration') || 'Duration'}
                                            </span>
                                            <span className="text-secondary font-bold dark:text-white">
                                                {course.duration ? `${course.duration} ${t('Mins / Meeting') || 'Mins / Meeting'}` : (t('Self-paced') || 'Self-paced')}
                                            </span>
                                        </div>
                                    </div>

                                    <a
                                        href={`${whatsappUrl}?text=${encodeURIComponent(`Halo Uma Coding, saya ingin bertanya tentang program coding untuk ${course.title}.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn_primary flex h-12 w-full items-center justify-center rounded-xl text-center text-lg font-bold shadow-lg shadow-primary/20"
                                    >
                                        {t('Enroll Now') || 'Enroll Now'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
