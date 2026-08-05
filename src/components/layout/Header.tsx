'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const { t, currentLocale, setLocale, loading } = useI18n();
    const [sticky, setSticky] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const langDropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 80);
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (
                langDropdownRef.current &&
                !langDropdownRef.current.contains(event.target as Node)
            ) {
                setIsLangOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const lmsUrl = process.env.NEXT_PUBLIC_LMS_URL || 'https://lms.umacoding.com';

    return (
        <header
            className={`fixed top-0 z-50 w-full max-w-screen bg-transparent py-1 transition-all ${
                sticky
                    ? 'dark:shadow-darkmd bg-white shadow-lg dark:bg-secondary'
                    : 'shadow-none'
            }`}
        >
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="max-w-40 md:max-w-64">
                        <Link href="/" aria-label="Uma Coding Home">
                            <img
                                src="/images/logo/logo-color-landscape.webp"
                                alt="Uma Coding logo"
                                className="h-auto w-44 dark:brightness-0 dark:invert"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden grow items-center justify-center space-x-6 lg:flex">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={`text-base font-medium transition-colors ${
                                            isActive
                                                ? 'text-primary font-semibold'
                                                : !sticky && pathname === '/'
                                                  ? 'text-white hover:text-primary'
                                                  : 'text-gray-800 hover:text-primary dark:text-white dark:hover:text-primary'
                                        }`}
                                    >
                                        {t(item.label)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Language Dropdown */}
                        <div className="relative" ref={langDropdownRef}>
                            <button
                                aria-label="Toggle language"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                disabled={loading}
                                className={`flex h-8 items-center justify-center gap-1 rounded-lg px-2 text-sm font-medium duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                    !sticky && pathname === '/'
                                        ? 'text-white'
                                        : 'text-gray-700 dark:text-white'
                                }`}
                            >
                                <span className="text-black uppercase dark:text-white">
                                    {currentLocale()}
                                </span>
                                <svg
                                    className={`h-4 w-4 stroke-black transition-transform dark:stroke-white ${
                                        isLangOpen ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isLangOpen && (
                                <div className="dark:bg-darklight dark:border-dark_border absolute top-full right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                                    <button
                                        onClick={() => {
                                            setLocale('en');
                                            setIsLangOpen(false);
                                        }}
                                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                            currentLocale() === 'en'
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-gray-700 dark:text-white'
                                        }`}
                                    >
                                        <span className="text-lg">🇺🇸</span>
                                        <span>{t('English')}</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setLocale('id');
                                            setIsLangOpen(false);
                                        }}
                                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                            currentLocale() === 'id'
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-gray-700 dark:text-white'
                                        }`}
                                    >
                                        <span className="text-lg">🇮🇩</span>
                                        <span>{t('Indonesian')}</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="text-body-color hidden h-8 w-8 items-center justify-center duration-300 lg:flex dark:text-white"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                className={`hidden h-6 w-6 dark:block ${
                                    !sticky && pathname === '/' ? 'text-white' : ''
                                }`}
                            >
                                <path
                                    d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                viewBox="0 0 23 23"
                                className={`text-dark h-8 w-8 dark:hidden ${
                                    !sticky && pathname === '/' ? 'text-black' : ''
                                }`}
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z"
                                />
                            </svg>
                        </button>

                        {/* LMS Login Redirect Button */}
                        <a
                            href={lmsUrl}
                            className="btn_outline btn-2 hover-outline-slide-down hidden rounded-lg lg:block"
                        >
                            <span className="!px-4 !py-2">{t('Login LMS')}</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="block rounded-lg p-2 lg:hidden"
                            aria-label="Toggle mobile menu"
                        >
                            <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
                            <span className="mt-1.5 block h-0.5 w-6 bg-black dark:bg-white"></span>
                            <span className="mt-1.5 block h-0.5 w-6 bg-black dark:bg-white"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay & Drawer */}
            {navbarOpen && (
                <div
                    className="fixed top-0 left-0 z-40 h-full w-full bg-black/50"
                    onClick={() => setNavbarOpen(false)}
                />
            )}

            <div
                ref={mobileMenuRef}
                className={`dark:bg-darkmode fixed top-0 right-0 z-50 h-full w-full max-w-64 transform bg-white shadow-lg transition-transform duration-300 lg:hidden ${
                    navbarOpen ? 'translate-x-0' : 'invisible translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between p-4">
                    <span className="text-black text-lg font-bold dark:text-white">{t('Menu')}</span>
                    <button onClick={() => setNavbarOpen(false)} aria-label="Close mobile menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="dark:text-SlateBlueText"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-start p-4">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setNavbarOpen(false)}
                            className="text-gray-800 dark:text-white py-2 text-base font-medium"
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                    <a
                        href={lmsUrl}
                        className="btn_primary mt-4 w-full text-center"
                    >
                        {t('Login LMS')}
                    </a>
                </nav>
            </div>
        </header>
    );
}
