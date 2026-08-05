'use client';

import Link from 'next/link';
import React from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-[#102c46]">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-solid border-[#224767] pt-16 pb-6 md:pt-24 md:pb-20">
                    <div>
                        <Link href="/" aria-label="Uma Coding Home">
                            <img
                                src="/images/logo/logo-white-landscape.webp"
                                alt="Uma Coding logo"
                                className="h-auto w-48"
                            />
                        </Link>
                    </div>
                    <ul className="flex flex-wrap items-center gap-8 py-5 md:py-0">
                        <li className="text-lg font-normal text-[#a3bbd1] transition-all hover:text-primary sm:text-xl">
                            <Link href="/">{t('Home')}</Link>
                        </li>
                        <li className="text-lg font-normal text-[#a3bbd1] transition-all hover:text-primary sm:text-xl">
                            <Link href="/programs">{t('Programs')}</Link>
                        </li>
                        <li className="text-lg font-normal text-[#a3bbd1] transition-all hover:text-primary sm:text-xl">
                            <Link href="/about">{t('About')}</Link>
                        </li>
                        <li className="text-lg font-normal text-[#a3bbd1] transition-all hover:text-primary sm:text-xl">
                            <Link href="/blogs">{t('Blog')}</Link>
                        </li>
                        <li className="text-lg font-normal text-[#a3bbd1] transition-all hover:text-primary sm:text-xl">
                            <Link href="/contact">{t('Contact')}</Link>
                        </li>
                    </ul>
                </div>
                <div className="py-8">
                    <p className="text-base font-normal text-[#a3bbd1]">
                        © {new Date().getFullYear()} Uma Coding. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
