'use client';

import Link from 'next/link';
import { useI18n } from '@/components/providers/I18nProvider';

export interface BreadcrumbLink {
    href: string;
    text: string;
}

interface BreadcrumbProps {
    links: BreadcrumbLink[];
}

export default function Breadcrumb({ links }: BreadcrumbProps) {
    const { t } = useI18n();
    const lastIndex = links.length - 1;

    return (
        <div className="my-[0.9375rem] mx-0 flex flex-wrap items-baseline justify-center">
            {links.map((link, index) =>
                index !== lastIndex ? (
                    <Link
                        key={index}
                        href={link.href}
                        className="text-SlateBlueText dark:text-opacity-80 hover:underline after:border-secondary relative flex items-center text-lg font-normal no-underline md:text-xl after:relative after:top-[0.0625rem] after:mx-[0.8125rem] after:my-0 after:inline-block after:h-2 after:w-2 after:-rotate-45 after:border-b-2 after:border-r-2 after:border-solid dark:after:border-white"
                    >
                        {t(link.text)}
                    </Link>
                ) : (
                    <span key={index} className="text-secondary dark:text-white mx-2.5 text-lg font-medium md:text-lg">
                        {t(link.text)}
                    </span>
                )
            )}
        </div>
    );
}
