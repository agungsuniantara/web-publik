'use client';

import Link from 'next/link';
import { Course } from '@/types';
import { useI18n } from '@/components/providers/I18nProvider';

export default function ProgramCard({ course }: { course: Course }) {
    const { t } = useI18n();
    const imageUrl = course.image_path || course.image_url;

    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.375rem] bg-white shadow-[0px_6px_10px_0px_#00000026] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_10px_20px_0px_#00000026] dark:bg-[#0d1a2c]">
            <div className="relative h-60 overflow-hidden">
                <Link
                    href={`/programs/${course.slug}`}
                    aria-label={course.title}
                    className="block h-full w-full"
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={course.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center border-b border-gray-200 bg-white text-primary dark:border-gray-800">
                            <span className="text-6xl font-bold opacity-20">
                                {course.title.charAt(0)}
                            </span>
                        </div>
                    )}
                </Link>
                {course.category && (
                    <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
                            {typeof course.category === 'string'
                                ? (course.category === 'kids'
                                    ? 'Anak-anak'
                                    : course.category === 'teens'
                                        ? 'Remaja'
                                        : course.category === 'adults'
                                            ? 'Dewasa'
                                            : course.category)
                                : course.category.name}
                        </span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col px-7 py-8">
                <h3 className="mb-3 text-[1.625rem] font-bold leading-8 text-secondary transition-colors group-hover:text-primary dark:text-white">
                    <Link href={`/programs/${course.slug}`}>{course.title}</Link>
                </h3>
                {course.description && (
                    <div
                        className="mb-6 line-clamp-2 text-lg text-[#547593] dark:text-opacity-80"
                        dangerouslySetInnerHTML={{ __html: course.description }}
                    />
                )}

                <div className="mt-auto flex items-center justify-between border-t border-dashed border-[#547593]/30 pt-6">
                    <div className="flex items-center gap-2 font-medium text-[#547593]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-secondary dark:text-white"
                        >
                            <path
                                d="M12 6V12L16 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>
                            {course.duration ? course.duration : t('Self-paced')}
                        </span>
                    </div>
                    <Link
                        href={`/programs/${course.slug}`}
                        aria-label={`${t('Read More')} - ${course.title}`}
                        className="flex items-center gap-2 font-bold text-primary transition-all hover:gap-3"
                    >
                        {t('Read More')}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
