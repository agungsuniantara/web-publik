'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useI18n } from '@/components/providers/I18nProvider';
import { getCmsFaqs, getCmsSettings } from '@/lib/cms';

interface FaqItem {
    question: string;
    answer: string;
}

export default function FaqSection() {
    const { t } = useI18n();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const defaultFaqs: FaqItem[] = [
        {
            question: t('Can the mentor come directly to my house?'),
            answer: t('Yes, we provide private classes where the mentor comes directly to the student\'s house in our service areas.'),
        },
        {
            question: t('Are there coding classes for kids?'),
            answer: t('Certainly, we have fun foundational programs to introduce logic, creativity, and technology for children.'),
        },
        {
            question: t('Does Uma Coding have classes for adults?'),
            answer: t('Yes, we have programs for beginners, university students, workers, and professionals looking to learn or improve coding skills.'),
        },
        {
            question: t('Are online classes available?'),
            answer: t('Yes, besides offline classes, we also provide live online classes guided by our mentors.'),
        },
        {
            question: t('Does the student need their own laptop?'),
            answer: t('Yes, students are expected to have their own laptop to maximize the learning process and work on independent projects.'),
        },
        {
            question: t('How do I choose the right program?'),
            answer: t('You can consult with us for free via WhatsApp to get program recommendations suited for the student\'s age, interests, and learning goals.'),
        },
        {
            question: t('Are private and small group classes available?'),
            answer: t('Yes, we provide 1-on-1 private home classes and small group class options so the learning process remains focused and interactive.'),
        },
        {
            question: t('How long is each meeting?'),
            answer: t('Generally, each meeting lasts between 60 to 90 minutes, tailored to the program, age, and focus level of the student.'),
        },
        {
            question: t('Are trial classes available?'),
            answer: t('Please contact our team via WhatsApp to get information regarding trial class availability or introductory sessions.'),
        },
        {
            question: t('Which areas do you serve for private coding classes?'),
            answer: t('Currently we serve private mentor-to-home classes in Bali. For students outside that area, we offer online class options.'),
        },
    ];

    const [faqs, setFaqs] = useState<FaqItem[]>(defaultFaqs);
    const [whatsappUrl, setWhatsappUrl] = useState<string>(
        'https://wa.me/6289602402811?text=Halo%20Uma%20Coding,%20saya%20ingin%20bertanya%20tentang%20jadwal%20dan%20program%20kursus%20coding'
    );

    useEffect(() => {
        let isMounted = true;
        async function loadCmsContent() {
            const [fetchedFaqs, settings] = await Promise.all([
                getCmsFaqs(),
                getCmsSettings(),
            ]);

            if (!isMounted) return;

            if (fetchedFaqs && fetchedFaqs.length > 0) {
                setFaqs(
                    fetchedFaqs.map((f) => ({
                        question: f.question,
                        answer: f.answer,
                    }))
                );
            }

            if (settings && settings['contact_whatsapp']) {
                setWhatsappUrl(settings['contact_whatsapp']);
            }
        }

        loadCmsContent();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="dark:bg-darklight bg-IcyBreeze py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
                    {/* Left Column: Sticky Title & CTA */}
                    <div className="lg:col-span-5" data-aos="fade-up">
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold tracking-wider text-primary uppercase dark:bg-primary/20">
                            <HelpCircle className="h-4 w-4" />
                            {t('FAQ')}
                        </span>
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-secondary md:text-4xl dark:text-white">
                            {t('Frequently Asked Questions')}
                        </h2>
                        <p className="text-SlateBlueText mb-8 text-lg dark:text-opacity-80">
                            {t('Answers to common questions about our coding classes, schedules, and programs offered.')}
                        </p>

                        {/* WhatsApp / Contact CTA box */}
                        <div className="dark:bg-darkmode rounded-2xl border border-primary/10 bg-white p-6 shadow-sm dark:border-gray-800">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <h3 className="text-base font-bold text-secondary dark:text-white">
                                    {t('Still Have Questions?')}
                                </h3>
                            </div>
                            <p className="text-SlateBlueText mb-5 text-sm dark:text-opacity-70">
                                {t('Contact us via WhatsApp for consultation regarding the most suitable program for you or your child.')}
                            </p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:bg-darkprimary hover:shadow-sm"
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>{t('Chat on WhatsApp')}</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="space-y-4 lg:col-span-7" data-aos="fade-up">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`dark:bg-darkmode rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                                        isOpen
                                            ? 'border-primary/30 ring-1 ring-primary/10 dark:border-primary/40'
                                            : 'border-gray-100 dark:border-gray-800'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <h3
                                            className={`text-base font-bold transition-colors duration-200 sm:text-lg ${
                                                isOpen ? 'text-primary' : 'text-secondary dark:text-white'
                                            }`}
                                        >
                                            {faq.question}
                                        </h3>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    <div
                                        className={`grid overflow-hidden px-6 transition-all duration-300 ${
                                            isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <p className="text-SlateBlueText min-h-0 text-base leading-relaxed dark:text-opacity-80">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
