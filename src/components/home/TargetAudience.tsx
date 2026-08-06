'use client';

import { useI18n } from '@/components/providers/I18nProvider';

export default function TargetAudience() {
    const { t } = useI18n();

    const audiences = [
        {
            title: t('Coding for Kids'),
            description: t('Fun foundational programs to introduce logic, creativity, game development, animation, and technology.'),
            delay: '200'
        },
        {
            title: t('Coding for Teens'),
            description: t('Advanced programs to build games, websites, apps, and learn programming languages.'),
            delay: '400'
        },
        {
            title: t('Coding for Adults'),
            description: t('Programs for beginners, university students, professionals, or anyone wanting to improve coding skills for academics, work, business, or career development.'),
            delay: '600'
        }
    ];

    return (
        <section className="bg-[#e4ebf3] py-16 lg:py-24 dark:bg-darklight">
            <div className="container">
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-[40px] dark:text-white">
                        {t('Program Options by Age')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-SlateBlueText dark:text-gray-300">
                        {t('Find the right coding class for your needs.')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {audiences.map((item, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={item.delay}
                            className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-darkmode"
                        >
                            <div className="mb-6 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex h-48 items-center justify-center">
                                <div className="text-primary text-6xl">💻</div>
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-secondary dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-SlateBlueText dark:text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
