'use client';

import HeroSub from '@/components/layout/HeroSub';
import React from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

export default function ContactClient() {
    const { t } = useI18n();
    const contactEmail = 'umacoding.bali@gmail.com';
    const contactPhone = '+62 896-0240-2811';
    const contactAddress = 'Melayani private coding class ke rumah, kelas offline, dan kelas online di Bali.';

    const breadcrumbs = [
        { href: '/', text: 'Home' },
        { href: '/contact', text: 'Contact' },
    ];

    return (
        <div>
            <HeroSub
                headingType="h1"
                title="Contact Us"
                description="You can contact us for any inquiries or questions."
                breadcrumbLinks={breadcrumbs}
            />

            {/* Contact Section */}
            <div className="dark:bg-darkmode py-16 lg:py-20">
                <div className="container mx-auto md:max-w-3xl lg:max-w-7xl">
                    <div className="flex flex-col items-start justify-center gap-8 md:flex-row md:gap-28 lg:items-center">
                        {/* Email Card */}
                        <div
                            className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8"
                            data-aos="fade-up"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                                <img
                                    src="/images/contact-page/email.svg"
                                    alt="Email"
                                    className="h-9 w-9"
                                />
                            </div>
                            <div className="flex h-full flex-col items-start justify-between sm:flex-row sm:items-center md:flex-col md:items-start">
                                <div>
                                    <span className="text-xl font-bold text-secondary dark:text-white">
                                        {t('Email Us')}
                                    </span>
                                    <p className="text-SlateBlueText max-w-80 pt-3 pb-7 text-xl font-normal dark:text-opacity-80">
                                        {t('Please feel free to drop us a line. We will respond as soon as possible.')}
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href={`mailto:${contactEmail}`}
                                        className="group flex items-center gap-3 text-lg font-medium text-primary hover:text-secondary dark:hover:text-white"
                                    >
                                        {t('Leave a message')}
                                        <svg
                                            width="23"
                                            height="17"
                                            viewBox="0 0 23 17"
                                            fill="#2F73F2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="group-hover:fill-secondary group-hover:dark:fill-white"
                                        >
                                            <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Career Card */}
                        <div
                            className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8"
                            data-aos="fade-up"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                                <img
                                    src="/images/contact-page/Career.svg"
                                    alt="Careers"
                                    className="h-9 w-9"
                                />
                            </div>
                            <div className="flex h-full flex-col items-start justify-between sm:flex-row sm:items-center md:flex-col md:items-start">
                                <div>
                                    <span className="text-xl font-bold text-secondary dark:text-white">
                                        {t('Careers')}
                                    </span>
                                    <p className="text-SlateBlueText max-w-80 pt-3 pb-7 text-xl font-normal dark:text-opacity-80">
                                        {t('Join our team and be part of something big')}
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href={`mailto:${contactEmail}`}
                                        className="group flex items-center gap-3 text-lg font-medium text-primary hover:text-secondary dark:hover:text-white"
                                    >
                                        {t('Send an application')}
                                        <svg
                                            width="23"
                                            height="17"
                                            viewBox="0 0 23 17"
                                            fill="#2F73F2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="group-hover:fill-secondary group-hover:dark:fill-white"
                                        >
                                            <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="dark:bg-darkmode py-16">
                <div className="container mx-auto md:max-w-3xl lg:max-w-4xl">
                    <h2 className="mb-10 text-center text-[28px] font-bold leading-9 text-secondary sm:text-[40px] dark:text-white">
                        {t('Frequently Asked Questions')}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                            <h4 className="text-secondary mb-3 text-lg font-bold dark:text-white">
                                {t('Do you offer online classes?')}
                            </h4>
                            <p className="text-SlateBlueText text-base leading-relaxed">
                                {t('Yes, we provide both online and offline private coding classes. Our flexible schedule allows you to learn from anywhere.')}
                            </p>
                        </div>
                        <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                            <h4 className="text-secondary mb-3 text-lg font-bold dark:text-white">
                                {t('Can the mentor come to my house?')}
                            </h4>
                            <p className="text-SlateBlueText text-base leading-relaxed">
                                {t('Absolutely! We offer private home-visit sessions for students located in the Bali area. Our mentors will come directly to you.')}
                            </p>
                        </div>
                        <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                            <h4 className="text-secondary mb-3 text-lg font-bold dark:text-white">
                                {t('What age group is suitable?')}
                            </h4>
                            <p className="text-SlateBlueText text-base leading-relaxed">
                                {t('Our programs are thoughtfully designed for kids, teens, and adults. We tailor the curriculum based on age, skill level, and learning goals.')}
                            </p>
                        </div>
                        <div className="dark:bg-darklight rounded-2xl bg-white p-6 shadow-sm">
                            <h4 className="text-secondary mb-3 text-lg font-bold dark:text-white">
                                {t('How do I register?')}
                            </h4>
                            <p className="text-SlateBlueText text-base leading-relaxed">
                                {t('You can easily register by contacting us via WhatsApp or Email. We will guide you through the available programs and schedules.')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="dark:bg-darkmode pb-10">
                <div className="container">
                    <div className="border-opacity-50 dark:border-dark_border grid grid-cols-1 gap-0 border-b border-solid border-white pb-11 md:grid-cols-6 lg:grid-cols-9 xl:gap-8">
                        <div className="col-span-3">
                            <h2 className="max-w-219 text-[28px] font-bold leading-9 text-secondary sm:text-[40px] sm:leading-[3.4rem] dark:text-white">
                                {t('Bali Head Office')}
                            </h2>
                        </div>
                        <div className="col-span-3">
                            <p className="dark:text-darktext max-w-266 text-xl font-normal leading-10 text-secondary sm:text-2xl">
                                {contactAddress}
                            </p>
                        </div>
                        <div className="col-span-3">
                            <a
                                href={`mailto:${contactEmail}`}
                                className="dark:text-SereneSky hover:text-RegalBlue text-xl font-medium text-secondary underline sm:text-2xl hover:dark:text-white"
                            >
                                {contactEmail}
                            </a>
                            <a
                                href={`tel:${contactPhone}`}
                                className="hover:text-opacity-100 flex w-fit items-center gap-2 text-xl text-secondary sm:text-2xl dark:text-primary hover:dark:text-white"
                            >
                                <span className="text-primary">{t('Call')}</span>
                                {contactPhone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
