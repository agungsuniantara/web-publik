'use client';

import Link from 'next/link';
import { useI18n } from '@/components/providers/I18nProvider';

interface ProgramCategoryFilterProps {
    activeCategory: string;
    searchQuery?: string;
}

export default function ProgramCategoryFilter({
    activeCategory,
    searchQuery = '',
}: ProgramCategoryFilterProps) {
    const { t } = useI18n();

    const categories = [
        {
            id: 'kids',
            label: t('Anak-anak'),
            badge: 'Usia 6-12',
        },
        {
            id: 'teens',
            label: t('Remaja'),
            badge: 'Usia 13-17',
        },
        {
            id: 'adults',
            label: t('Dewasa'),
            badge: 'Usia 18+',
        },
        {
            id: 'all',
            label: t('Semua Program'),
            badge: t('Semua'),
        },
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const searchParam = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : '';
                const href = `/programs?category=${cat.id}${searchParam}`;

                return (
                    <Link
                        key={cat.id}
                        href={href}
                        scroll={false}
                        className={`group relative flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 md:px-7 md:py-3.5 md:text-base ${
                            isActive
                                ? 'bg-primary text-white shadow-xl shadow-primary/30 ring-4 ring-primary/20 scale-105 font-bold'
                                : 'border border-gray-200 bg-white text-secondary shadow-sm hover:border-primary/50 hover:bg-gray-50 hover:text-primary dark:border-gray-800 dark:bg-darklight dark:text-gray-200 dark:hover:border-primary/50 dark:hover:bg-gray-800'
                        }`}
                    >
                        <span>{cat.label}</span>
                        {cat.badge && (
                            <span
                                className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                                    isActive
                                        ? 'bg-white/25 text-white'
                                        : 'bg-gray-100 text-SlateBlueText dark:bg-gray-800 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                                }`}
                            >
                                {cat.badge}
                            </span>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
