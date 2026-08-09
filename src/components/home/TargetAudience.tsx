'use client';

import Link from 'next/link';

interface TargetAudienceProps {
    settings?: Record<string, string>;
}

export default function TargetAudience({ settings = {} }: TargetAudienceProps) {
    const title = settings.section_audience_title || 'Pilihan Program Berdasarkan Usia';
    const subtitle = settings.section_audience_subtitle || 'Temukan kelas coding yang tepat sesuai kebutuhan Anda.';

    const audiences = [
        {
            category: 'kids',
            href: '/programs?category=kids',
            title: settings.audience_kids_title || 'Coding untuk Anak (Kids)',
            description: settings.audience_kids_description || 'Program dasar yang menyenangkan untuk mengenalkan logika, kreativitas, pembuatan game, animasi, dan teknologi.',
            image: settings.audience_kids_image || null,
            delay: '200'
        },
        {
            category: 'teens',
            href: '/programs?category=teens',
            title: settings.audience_teens_title || 'Coding untuk Remaja (Teens)',
            description: settings.audience_teens_description || 'Program lanjutan untuk membangun game, website, aplikasi, dan mempelajari bahasa pemrograman.',
            image: settings.audience_teens_image || null,
            delay: '400'
        },
        {
            category: 'adults',
            href: '/programs?category=adults',
            title: settings.audience_adults_title || 'Coding untuk Dewasa (Adults)',
            description: settings.audience_adults_description || 'Program untuk pemula, mahasiswa, profesional, atau siapa saja yang ingin tingkatkan skill coding.',
            image: settings.audience_adults_image || null,
            delay: '600'
        }
    ];

    return (
        <section className="bg-[#e4ebf3] py-16 lg:py-24 dark:bg-darklight">
            <div className="container">
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-[40px] dark:text-white">
                        {title}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-SlateBlueText dark:text-gray-300">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {audiences.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            data-aos="fade-up"
                            data-aos-delay={item.delay}
                            className="group block rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-darkmode"
                        >
                            <div className="mb-6 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex h-48 items-center justify-center transition-colors group-hover:bg-primary/10">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="text-primary text-6xl transition-transform duration-300 group-hover:scale-110">💻</div>
                                )}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-secondary transition-colors group-hover:text-primary dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-SlateBlueText dark:text-gray-300">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
