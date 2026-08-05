'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useI18n } from '@/components/providers/I18nProvider';

interface FaqItem {
    question: string;
    answer: string;
}

export default function FaqSection() {
    const { t } = useI18n();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FaqItem[] = [
        {
            question: t('What age can my child start coding at Uma Coding?'),
            answer: t('We accept students from age 6 in our Junior Program (using Scratch Junior, Scratch, and Construct 3) and from age 13 in our Senior Program (Java, Python, Data Science, web, and full stack development).'),
        },
        {
            question: t('Do you offer private coding classes in Bali?'),
            answer: t('Yes. We offer private 1-on-1 coding classes for kids, teens, and adults across Bali, including Canggu, Denpasar, Badung, and Ubud. Online private sessions are also available.'),
        },
        {
            question: t('Is there a coding class for homeschool students?'),
            answer: t('Yes. Our Homeschooling Class is built around flexible scheduling and integrates easily with homeschool curricula for both junior and senior students.'),
        },
        {
            question: t('What is the difference between a regular class and a private class?'),
            answer: t('Regular classes are small group sessions (maximum 4 students) for collaborative learning. Private classes are 1-on-1 with a dedicated mentor for a fully personalised pace and curriculum.'),
        },
        {
            question: t('What programming languages do you teach?'),
            answer: t('We teach Scratch, Scratch Junior, Construct 3, Roblox Studio with Lua, Python, Data Science, Pseudocode, Java, and a full Full Stack Developer curriculum including HTML, CSS, JavaScript, React, Laravel, and databases.'),
        },
        {
            question: t('Do you teach online or only in Bali?'),
            answer: t('We teach both. Our Bali head office is in Denpasar and we offer offline classes on-site. Online classes are available for students anywhere in Indonesia and beyond.'),
        },
        {
            question: t('How do I register my child for a coding class?'),
            answer: t('You can browse our programs page, choose the right course, and contact us via WhatsApp or the contact form. We will help you pick the right class format and schedule.'),
        },
    ];

    const whatsappUrl = 'https://wa.me/6281234567890';

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
                            {t('Coding Class Questions from Parents and Students')}
                        </h2>
                        <p className="text-SlateBlueText mb-8 text-lg dark:text-opacity-80">
                            {t('Answers to the most common questions about our coding classes, bootcamps, and programs in Bali.')}
                        </p>

                        {/* WhatsApp / Contact CTA box */}
                        <div className="dark:bg-darkmode rounded-2xl border border-primary/10 bg-white p-6 shadow-sm dark:border-gray-800">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <h4 className="text-base font-bold text-secondary dark:text-white">
                                    {t('Still have questions?')}
                                </h4>
                            </div>
                            <p className="text-SlateBlueText mb-5 text-sm dark:text-opacity-70">
                                {t('Get in touch with us directly on WhatsApp. We are here to help you pick the right program for your child.')}
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
