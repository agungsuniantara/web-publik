'use client';

import { useI18n } from '@/components/providers/I18nProvider';
import { Home, Users, MapPin, Laptop } from 'lucide-react';

export default function LearningMethods() {
    const { t } = useI18n();

    const methods = [
        {
            icon: <Home className="h-8 w-8 text-primary" />,
            title: t('Private at Home'),
            description: t('The mentor comes directly to the student\'s home. Schedule and materials can be adjusted to learning needs.'),
            delay: '100'
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: t('Small Group Class'),
            description: t('Learn in a small group so students still get the mentor\'s attention.'),
            delay: '200'
        },
        {
            icon: <MapPin className="h-8 w-8 text-primary" />,
            title: t('Offline Class'),
            description: t('Learn in person at the Uma Coding class location.'),
            delay: '300'
        },
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            title: t('Online Class'),
            description: t('Learn live with a mentor from anywhere.'),
            delay: '400'
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24 dark:bg-darkmode">
            <div className="container">
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-[40px] dark:text-white">
                        {t('Choose the Right Learning Method')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-SlateBlueText dark:text-gray-300">
                        {t('We offer various flexible learning methods according to your needs.')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {methods.map((item, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={item.delay}
                            className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-gray-800 dark:bg-darklight"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                {item.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-secondary dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-sm text-SlateBlueText dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
