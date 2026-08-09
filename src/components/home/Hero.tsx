'use client';

import Link from 'next/link';
import { CheckCircle2, Code2, Terminal } from 'lucide-react';
import { useI18n } from '@/components/providers/I18nProvider';

export default function Hero() {
    const { t } = useI18n();
    const whatsappUrl = 'https://wa.me/6289602402811?text=Halo%20Uma%20Coding,%20saya%20ingin%20bertanya%20tentang%20jadwal%20dan%20program%20kursus%20coding';

    return (
        <section className="dark:bg-darkmode relative overflow-hidden py-12 lg:py-20">
            <div className="container relative z-10">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-blue-700 dark:bg-primary/20 dark:text-sky-300"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                            </span>
                            {t('Choose Your Learning Method')}
                        </div>

                        <h1
                            className="mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl lg:text-6xl dark:text-white"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            {t('Private Coding Classes Direct to Your Home')}
                        </h1>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-SlateBlueText mb-8 max-w-lg text-lg font-normal md:text-xl dark:text-gray-300"
                        >
                            {t('Coding courses for kids, teens, and adults with options for private classes at home, small groups, offline, and online. Learning programs are tailored to the age, skill level, and goals of each student.')}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="btn btn-1 hover-filled-slide-down overflow-hidden rounded-lg"
                            >
                                <span className="!flex items-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                        <path d="M22 10v6" />
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                    </svg>
                                    {t('Ask for Schedule via WhatsApp')}
                                </span>
                            </a>
                            <Link
                                href="#programs"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                className="btn_outline btn-2 hover-outline-slide-down group rounded-lg"
                            >
                                <span className="!flex items-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 group-hover:brightness-0 group-hover:invert"
                                    >
                                        <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
                                        <path d="m21 22-1.879-1.878" />
                                        <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
                                        <circle cx="17" cy="18" r="3" />
                                    </svg>
                                    {t('View Program Options')}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Visual */}
                    <div
                        className="relative hidden w-full lg:block lg:w-1/2"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

                        <div className="relative rotate-1 transform overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.01]">
                            <div className="flex items-center gap-2 border-b border-[#333] bg-[#252526] px-4 py-3">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="ml-4 flex items-center gap-2 font-mono text-xs text-gray-400">
                                    <Terminal className="h-3 w-3" />
                                    success.tsx
                                </div>
                            </div>

                            <div className="p-6 font-mono text-[13px] leading-relaxed text-gray-300 md:text-sm">
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">1</span>
                                    <span>
                                        <span className="text-[#c586c0]">const</span>{' '}
                                        <span className="text-[#4fc1ff]">student</span> ={' '}
                                        <span className="text-[#dcdcaa]">{`{`}</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">2</span>
                                    <span className="pl-4">
                                        name: <span className="text-[#ce9178]">'Future Creator'</span>,
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">3</span>
                                    <span className="pl-4">
                                        goals: [<span className="text-[#ce9178]">'Game Dev'</span>,{' '}
                                        <span className="text-[#ce9178]">'Web Apps'</span>],
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">4</span>
                                    <span className="pl-4">
                                        location: <span className="text-[#ce9178]">'Rumah Anda'</span>,
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">5</span>
                                    <span className="pl-4">
                                        status: <span className="text-[#ce9178]">'Learning'</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">6</span>
                                    <span>
                                        <span className="text-[#dcdcaa]">{`}`}</span>;
                                    </span>
                                </div>
                                <div className="mt-2 flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">7</span>
                                    <span>
                                        <span className="text-[#6a9955]">// Start your journey today</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="mr-4 w-4 text-right text-gray-600 select-none">8</span>
                                    <span>
                                        <span className="text-[#c586c0]">await</span>{' '}
                                        <span className="text-[#4ec9b0]">UmaCoding</span>.
                                        <span className="text-[#dcdcaa]">enroll</span>(
                                        <span className="text-[#9cdcfe]">student</span>);
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Cards */}
                        <div className="dark:bg-darklight absolute top-12 -left-12 z-20 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                    <Code2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-secondary dark:text-white">{t('Live Mentorship')}</p>
                                    <p className="text-xs text-gray-500">{t('Expert Guidance')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="dark:bg-darklight absolute -right-8 bottom-8 z-20 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-green-50 p-2 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-secondary dark:text-white">{t('Project Based')}</p>
                                    <p className="text-xs text-gray-500">{t('Learn Through Practice')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
