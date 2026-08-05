'use client';

import Breadcrumb, { BreadcrumbLink } from './Breadcrumb';
import { cn } from '@/lib/utils';
import { useI18n } from '@/components/providers/I18nProvider';

interface HeroSubProps {
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    title: string;
    description: string;
    breadcrumbLinks: BreadcrumbLink[];
    className?: string;
    titleClassName?: string;
}

export default function HeroSub({
    headingType: Heading = 'h2',
    title,
    description,
    breadcrumbLinks,
    className,
    titleClassName,
}: HeroSubProps) {
    const { t } = useI18n();

    return (
        <section className={cn('dark:bg-darkmode pt-8 pb-12 text-start', className)}>
            <div className="container">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div data-aos="fade-right" data-aos-delay="200">
                        <Heading
                            className={cn(
                                'text-secondary dark:text-white text-4xl font-bold leading-[3.4rem] md:text-[40px]',
                                titleClassName
                            )}
                        >
                            {t(title)}
                        </Heading>
                        <p className="text-SlateBlueText dark:text-opacity-80 mt-3 w-full max-w-[506px] text-lg font-normal">
                            {t(description)}
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200">
                        <Breadcrumb links={breadcrumbLinks} />
                    </div>
                </div>
            </div>
        </section>
    );
}
