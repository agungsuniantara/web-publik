'use client';

import Link from 'next/link';
import ThumbnailCarousel from './ThumbnailCarousel';
import { useI18n } from '@/components/providers/I18nProvider';

export default function Conferences() {
    const { t } = useI18n();

    return (
        <section className="bg-IcyBreeze dark:bg-darklight before:bg-PaleSkyBlu relative overflow-hidden before:absolute before:-bottom-1/2 before:hidden before:h-687 before:w-687 before:rounded-full before:content-[''] before:xl:inline-block dark:before:bg-secondary">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-24">
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <ThumbnailCarousel />
                    </div>
                    <div
                        className="pt-6 md:pt-0"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h2>
                            {t('Coding Programs in Bali: From Beginner to Job-Ready')}
                        </h2>
                        <p className="text-SlateBlueText dark:text-opacity-80 max-w-506 pt-5 pb-6 text-lg font-normal md:pt-9 md:pb-14">
                            {t("Whether you're just starting your coding journey or looking to master advanced concepts, our curriculum is designed to help you succeed. Join us on-campus in Bali, online from anywhere, or book a private coding tutor.")}
                        </p>
                        <Link
                            href="/programs"
                            className="btn_outline btn-2 hover-outline-slide-down"
                        >
                            <span>{t('Explore Programs')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
