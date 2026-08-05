'use client';

import HeroSub from '@/components/layout/HeroSub';
import { Code2, Home, Rocket, User, Users } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

export default function AboutClient() {
    const { t } = useI18n();

    const breadcrumbs = [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
    ];

    return (
        <div>
            <HeroSub
                headingType="h1"
                title="Empowering the Next Generation of Innovators"
                description="Uma Coding is dedicated to nurturing young innovators in a supportive, private environment where learning to code is a journey of growth. Inspired by the philosophy of 'Uma', we provide the perfect ground for your child's logic and creativity to flourish every day."
                breadcrumbLinks={breadcrumbs}
                className="pb-24 md:pb-32"
                titleClassName="max-w-3xl"
            />

            {/* Mission & Vision Section */}
            <section className="dark:bg-darklight bg-gray-50 py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
                        <div className="w-full" data-aos="fade-right">
                            <div className="border-primary mb-10 border-l-4 pl-6">
                                <h2 className="mb-4 text-3xl font-bold text-secondary dark:text-white">
                                    {t('Our Mission')}
                                </h2>
                                <p className="text-body-color text-lg leading-relaxed dark:text-white/70">
                                    {t('To render high-quality coding education accessible to everyone, regardless of their background. We strive to cultivate a community of passionate learners who are ready to tackle real-world challenges with confidence and innovation.')}
                                </p>
                            </div>
                        </div>
                        <div className="w-full" data-aos="fade-left">
                            <div className="border-secondary mb-10 border-l-4 pl-6">
                                <h2 className="mb-4 text-3xl font-bold text-secondary dark:text-white">
                                    {t('Our Vision')}
                                </h2>
                                <p className="text-body-color text-lg leading-relaxed dark:text-white/70">
                                    {t('To become the global standard for coding bootcamps/competitions, where theoretical knowledge meets practical application. We see a world where every student has the tools to turn their ideas into reality.')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative z-10 py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-200 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl dark:text-white">
                            {t('Our Impact in Numbers')}
                        </h2>
                        <p className="text-body-color text-base dark:text-white/70">
                            {t("We are proud of our growing community and the milestones we've achieved together.")}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div
                            className="dark:bg-darklight flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg sm:w-1/2 md:w-1/4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-primary mb-2 text-4xl font-bold">50+</h3>
                            <p className="text-body-color text-base font-medium dark:text-white/70">
                                {t('Students Enrolled')}
                            </p>
                        </div>
                        <div
                            className="dark:bg-darklight flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg sm:w-1/2 md:w-1/4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="text-primary mb-2 text-4xl font-bold">10+</h3>
                            <p className="text-body-color text-base font-medium dark:text-white/70">
                                {t('Courses')}
                            </p>
                        </div>
                        <div
                            className="dark:bg-darklight flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg sm:w-1/2 md:w-1/4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h3 className="text-primary mb-2 text-4xl font-bold">10+</h3>
                            <p className="text-body-color text-base font-medium dark:text-white/70">
                                {t('Expert Mentors')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Programs Section */}
            <section className="bg-IcyBreeze dark:bg-darkmode py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-200 text-center" data-aos="fade-up">
                        <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold">
                            {t('What We Offer')}
                        </span>
                        <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl dark:text-white">
                            {t('Our Educational Programs')}
                        </h2>
                        <p className="text-body-color text-base dark:text-white/70">
                            {t("Tailored learning paths for every stage of your child's coding journey.")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Junior Program */}
                        <div
                            className="dark:bg-darklight rounded-2xl bg-white p-8 shadow-sm"
                            data-aos="fade-right"
                        >
                            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="flex items-center gap-3 text-2xl font-bold text-secondary dark:text-white">
                                        <Rocket className="text-primary h-6 w-6" />
                                        {t('Junior Program')}
                                    </h3>
                                    <p className="text-body-color mt-1 text-sm dark:text-white/60">
                                        {t('Building logic & creativity')}
                                    </p>
                                </div>
                                <span className="bg-primary/10 text-primary self-start rounded-full px-3 py-1 text-xs font-bold sm:self-center">
                                    {t('Ages 6-12')}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="dark:bg-darkmode flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm dark:border-gray-800">
                                    <div className="dark:bg-darklight text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        <Users className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                                            {t('Regular Class')}
                                        </h4>
                                        <p className="text-body-color text-sm leading-relaxed dark:text-white/60">
                                            {t('Small group sessions (max 4) fostering collaboration and peer learning while mastering the basics.')}
                                        </p>
                                    </div>
                                </div>

                                <div className="dark:bg-darkmode flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm dark:border-gray-800">
                                    <div className="dark:bg-darklight text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        <User className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                                            {t('Private Class')}
                                        </h4>
                                        <p className="text-body-color text-sm leading-relaxed dark:text-white/60">
                                            {t('One-on-one mentorship for personalized attention and accelerated learning pace.')}
                                        </p>
                                    </div>
                                </div>

                                <div className="dark:bg-darkmode flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm dark:border-gray-800">
                                    <div className="dark:bg-darklight text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        <Home className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                                            {t('Homeschooling Class')}
                                        </h4>
                                        <p className="text-body-color text-sm leading-relaxed dark:text-white/60">
                                            {t('Flexible scheduling designed to integrate seamlessly with homeschooling curriculums.')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Senior Program */}
                        <div
                            className="dark:bg-darklight rounded-2xl bg-white p-8 shadow-sm"
                            data-aos="fade-left"
                        >
                            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="flex items-center gap-3 text-2xl font-bold text-secondary dark:text-white">
                                        <Code2 className="text-primary h-6 w-6" />
                                        {t('Senior Program')}
                                    </h3>
                                    <p className="text-body-color mt-1 text-sm dark:text-white/60">
                                        {t('Professional development & career')}
                                    </p>
                                </div>
                                <span className="bg-primary/10 text-primary self-start rounded-full px-3 py-1 text-xs font-bold sm:self-center">
                                    {t('Ages 13+')}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="dark:bg-darkmode flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm dark:border-gray-800">
                                    <div className="dark:bg-darklight text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        <Users className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                                            {t('Regular Class')}
                                        </h4>
                                        <p className="text-body-color text-sm leading-relaxed dark:text-white/60">
                                            {t('Advanced group study focusing on project development and teamwork skills.')}
                                        </p>
                                    </div>
                                </div>

                                <div className="dark:bg-darkmode flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm dark:border-gray-800">
                                    <div className="dark:bg-darklight text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        <User className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                                            {t('Private Class')}
                                        </h4>
                                        <p className="text-body-color text-sm leading-relaxed dark:text-white/60">
                                            {t('Intensive individual coaching for specialized topics and portfolio building.')}
                                        </p>
                                    </div>
                                </div>

                                <div className="dark:bg-darkmode flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm dark:border-gray-800">
                                    <div className="dark:bg-darklight text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        <Home className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                                            {t('Homeschooling Class')}
                                        </h4>
                                        <p className="text-body-color text-sm leading-relaxed dark:text-white/60">
                                            {t('Comprehensive computer science education tailored for homeschool requirements.')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="dark:bg-darkmode bg-white py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div
                            className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2"
                            data-aos="fade-right"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-xl">
                                <img
                                    src="/images/about/student.webp"
                                    alt="Uma Coding student learning programming in Bali classroom"
                                    className="aspect-4/3 h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
                            <div className="lg:pl-10">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    {t('Why Choose Umacoding?')}
                                </span>
                                <h2 className="mb-6 text-3xl font-bold text-secondary sm:text-4xl dark:text-white">
                                    {t("We Don't Just Teach Code, We Build Careers (and Winners)")}
                                </h2>
                                <p className="text-body-color mb-8 text-base dark:text-white/70">
                                    {t("Our curriculum is designed to bridge the gap between academic theory and industry demands. Whether you're a complete beginner or looking to upskill, we provide the environment you need to succeed.")}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 20h9" />
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 text-lg font-bold text-secondary dark:text-white">
                                                {t('Hands-on Projects')}
                                            </h4>
                                            <p className="text-body-color text-sm dark:text-white/70">
                                                {t('Learn by doing with our project-based curriculum.')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 text-lg font-bold text-secondary dark:text-white">
                                                {t('Expert Mentorship')}
                                            </h4>
                                            <p className="text-body-color text-sm dark:text-white/70">
                                                {t('Guidance from industry professionals at every step.')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 text-lg font-bold text-secondary dark:text-white">
                                                {t('Job Readiness')}
                                            </h4>
                                            <p className="text-body-color text-sm dark:text-white/70">
                                                {t('Focus on skills that top employers are looking for.')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
