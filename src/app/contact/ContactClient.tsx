'use client';

import HeroSub from '@/components/layout/HeroSub';
import React from 'react';
import { useI18n } from '@/components/providers/I18nProvider';
import { CmsSiteSettings } from '@/lib/cms';

interface ContactClientProps {
    settings?: CmsSiteSettings;
}

export default function ContactClient({ settings }: ContactClientProps) {
    const { t } = useI18n();
    const contactEmail = settings?.contact_email || 'info@umacoding.com';
    const contactPhone = settings?.contact_phone || '+62 896-0240-2811';
    const contactAddress = settings?.contact_address || 'Melayani private coding class ke rumah, kelas offline, dan kelas online di Bali.';
    const contactGoogleMapUrl = settings?.contact_google_map_url || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.635976794282!2d115.15182647541532!3d-8.63090118773815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239112c4ef133%3A0x7a969ef3cbf52106!2sUma%20Coding!5e0!3m2!1sid!2sid!4v1786613675477!5m2!1sid!2sid';

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

            {/* Contact Information Section */}
            <div className="dark:bg-darkmode py-16 lg:py-20">
                <div className="container">
                    <div className="border-opacity-50 dark:border-dark_border grid grid-cols-1 gap-8 pb-11 md:grid-cols-6 lg:grid-cols-9 xl:gap-8">
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
                        <div className="col-span-3 flex flex-col gap-2">
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

            {/* Google Map Section */}
            <div className="dark:bg-darkmode pb-16 lg:pb-20">
                <div className="container mx-auto">
                    <div className="h-[400px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[500px]">
                        <iframe
                            src={contactGoogleMapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
