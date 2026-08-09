'use client';

import { Home, Users, MapPin, Laptop } from 'lucide-react';

interface LearningMethodsProps {
    settings?: Record<string, string>;
}

export default function LearningMethods({ settings = {} }: LearningMethodsProps) {
    const title = settings.section_methods_title || 'Pilih Cara Belajar yang Sesuai';
    const subtitle = settings.section_methods_subtitle || 'Kami menyediakan berbagai metode belajar yang fleksibel sesuai kebutuhan Anda.';

    const methods = [
        {
            icon: <Home className="h-8 w-8 text-primary" />,
            image: settings.method_private_image || null,
            title: settings.method_private_title || 'Private di Rumah',
            description: settings.method_private_description || 'Mentor datang langsung ke rumah siswa. Jadwal dan materi dapat disesuaikan dengan kebutuhan belajar.',
            delay: '100'
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            image: settings.method_group_image || null,
            title: settings.method_group_title || 'Kelas Kelompok Kecil',
            description: settings.method_group_description || 'Belajar dalam kelompok kecil sehingga siswa tetap mendapatkan perhatian penuh dari mentor.',
            delay: '200'
        },
        {
            icon: <MapPin className="h-8 w-8 text-primary" />,
            image: settings.method_offline_image || null,
            title: settings.method_offline_title || 'Kelas Offline',
            description: settings.method_offline_description || 'Belajar tatap muka secara langsung di lokasi kelas Uma Coding.',
            delay: '300'
        },
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            image: settings.method_online_image || null,
            title: settings.method_online_title || 'Kelas Online',
            description: settings.method_online_description || 'Belajar secara interaktif langsung bersama mentor dari mana saja.',
            delay: '400'
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24 dark:bg-darkmode">
            <div className="container">
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-[40px] dark:text-white">
                        {title}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-SlateBlueText dark:text-gray-300">
                        {subtitle}
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
                            <div className="mb-6 overflow-hidden flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                                ) : (
                                    item.icon
                                )}
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
