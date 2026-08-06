'use client';

import Link from 'next/link';
import { Course } from '@/types';
import { Award, GraduationCap, Heart, MapPin, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { useI18n } from '@/components/providers/I18nProvider';

interface Props {
    courses?: Course[];
}

export default function WhyChoose({ courses = [] }: Props) {
    const { t } = useI18n();

    const maxVisibleCourses = 7;
    const hasMoreCourses = courses.length > maxVisibleCourses;
    const visibleCourses = courses.length > 0 ? courses.slice(0, maxVisibleCourses) : [];

    const fallbackTechs = [
        'Scratch & Scratch Jr',
        'Construct 3 Game Dev',
        'Roblox Studio (Lua)',
        'Java Programming',
        'Full Stack Web',
        'HTML, CSS & JS',
        'React & Laravel',
        'Logic & Thinking',
    ];

    const whatsappUrl = 'https://wa.me/6289602402811?text=Halo%20Uma%20Coding,%20saya%20ingin%20bertanya%20tentang%20jadwal%20dan%20program%20kursus%20coding';

    return (
        <section className="dark:bg-darkmode bg-white py-24">
            <div className="container">
                <div
                    className="mb-16 flex flex-col items-center justify-center text-center"
                    data-aos="fade-up"
                >
                    <span className="mb-3 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-primary uppercase dark:bg-primary/20">
                        {t('Why Parents Choose Uma Coding')}
                    </span>
                    <h2 className="mb-4 max-w-4xl text-3xl font-extrabold tracking-tight text-secondary md:text-4xl dark:text-white">
                        {t('Why Choose Uma Coding?')}
                    </h2>
                    <p className="text-SlateBlueText dark:text-opacity-80 mx-auto max-w-3xl text-lg leading-relaxed">
                        {t('Uma Coding is a trusted coding class provider that helps kids, teens, and adults learn programming through practical projects, friendly mentors, and interactive classes. We are here to help every student achieve their goals.')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Card 1: Bento Large Card */}
                    <div
                        className="dark:bg-darklight group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md lg:col-span-2 dark:border-gray-800 dark:hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-secondary dark:text-white">
                                        {t('Programs & Pathways')}
                                    </h3>
                                    <p className="text-SlateBlueText text-sm dark:text-opacity-60">
                                        {t('Tailored learning tracks from ages 6 to 18+')}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-semibold tracking-wider text-secondary/70 uppercase dark:text-white/70">
                                        {t('Who This Is For')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            t('Kids ages 6-12 (Junior Program)'),
                                            t('Teens ages 13-18 (Senior Program)'),
                                            t('Complete beginners & tech enthusiasts'),
                                            t('Homeschool students'),
                                            t('Private 1-on-1 learners'),
                                        ].map((item, idx) => (
                                            <li key={idx} className="text-SlateBlueText flex items-center gap-3 text-base dark:text-opacity-90">
                                                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-xs font-semibold tracking-wider text-secondary/70 uppercase dark:text-white/70">
                                        {t('What Students Learn')}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {courses.length > 0 ? (
                                            <>
                                                {visibleCourses.map((c) => (
                                                    <Link
                                                        key={c.id}
                                                        href={`/programs/${c.slug}`}
                                                        className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                                                    >
                                                        {c.title}
                                                    </Link>
                                                ))}
                                                {hasMoreCourses && (
                                                    <Link
                                                        href="/programs"
                                                        className="flex items-center gap-1 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-all hover:bg-primary/20 dark:border-primary/40 dark:bg-primary/30 dark:text-white dark:hover:bg-primary/45"
                                                    >
                                                        <span>{t('View All')}</span>
                                                        <ChevronRight className="h-3 w-3" />
                                                    </Link>
                                                )}
                                            </>
                                        ) : (
                                            fallbackTechs.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary dark:border-white/10 dark:bg-white/5 dark:text-white"
                                                >
                                                    {t(tech)}
                                                </span>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800/60">
                            <Link
                                href="/programs"
                                className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:underline"
                            >
                                <span>{t('Explore Curriculums')}</span>
                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Class Format & Location */}
                    <div
                        className="dark:bg-darklight group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md dark:border-gray-800 dark:hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div>
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-secondary dark:text-white">
                                {t('Class Format & Location')}
                            </h3>
                            <p className="text-SlateBlueText mb-6 text-sm dark:text-opacity-80">
                                {t('Flexible scheduling options designed to fit modern families.')}
                            </p>
                            <ul className="space-y-3.5">
                                {[
                                    t('Private 1-on-1 class'),
                                    t('Small group class (max 4 students)'),
                                    t('Homeschool-friendly schedule'),
                                    t('Online class from anywhere'),
                                    t('Offline classes at Bali campus'),
                                ].map((format, idx) => (
                                    <li key={idx} className="text-SlateBlueText flex items-center gap-3 text-base dark:text-opacity-95">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span>{format}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800/60">
                            <span className="text-SlateBlueText/60 text-xs font-semibold tracking-wider uppercase dark:text-white/40">
                                {t('Bali, Indonesia & Online')}
                            </span>
                        </div>
                    </div>

                    {/* Card 3: Mentor-Led Learning */}
                    <div
                        className="dark:bg-darklight group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md dark:border-gray-800 dark:hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div>
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-secondary dark:text-white">
                                {t('Mentor-Led Learning')}
                            </h3>
                            <p className="text-SlateBlueText text-base leading-relaxed dark:text-opacity-90">
                                {t('Every class is guided by experienced mentors who provide personalised feedback, project reviews, and one-on-one support so that every student learns at the right pace.')}
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary dark:bg-primary/20 dark:text-white">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                                {t('1:1 Personal Support')}
                            </span>
                        </div>
                    </div>

                    {/* Card 4: Real Portfolio Projects */}
                    <div
                        className="dark:bg-darklight group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md dark:border-gray-800 dark:hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div>
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-secondary dark:text-white">
                                {t('Real Portfolio Projects')}
                            </h3>
                            <p className="text-SlateBlueText text-base leading-relaxed dark:text-opacity-90">
                                {t('Students graduate with a portfolio of games, apps, and websites they built themselves — perfect for school applications, competitions, and future careers.')}
                            </p>
                        </div>
                        <div className="dark:bg-darkmode mt-8 overflow-hidden rounded-xl border border-gray-100 bg-slate-50 p-3 font-mono text-[10px] text-slate-600 dark:border-gray-800/80 dark:text-slate-400">
                            <div className="mb-1.5 flex gap-1">
                                <div className="h-2 w-2 rounded-full bg-red-400" />
                                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                                <div className="h-2 w-2 rounded-full bg-green-400" />
                            </div>
                            <span className="font-bold text-primary">const</span> project = <span className="text-amber-600 dark:text-amber-500">&quot;My First Game&quot;</span>;
                        </div>
                    </div>

                    {/* Card 5: Safe & Supportive */}
                    <div
                        className="dark:bg-darklight group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md dark:border-gray-800 dark:hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div>
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-secondary dark:text-white">
                                {t('Safe & Supportive')}
                            </h3>
                            <p className="text-SlateBlueText text-base leading-relaxed dark:text-opacity-90">
                                {t('A nurturing, small-class environment inspired by the philosophy of "Uma" — the perfect ground for your child\'s logic and creativity to flourish.')}
                            </p>
                        </div>
                        <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800/60">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-white">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                                {t('Inspired by "Uma" Philosophy')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-4" data-aos="fade-up">
                    <Link
                        href="#programs"
                        className="btn btn-1 hover-filled-slide-down overflow-hidden rounded-xl"
                    >
                        <span>{t('View Programs')}</span>
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn_outline btn-2 hover-outline-slide-down rounded-xl"
                    >
                        <span>{t('Ask via WhatsApp')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
