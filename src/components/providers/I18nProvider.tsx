'use client';

import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import enTranslations from '@/lang/en.json';
import idTranslations from '@/lang/id.json';

type Locale = 'en' | 'id';

interface Translations {
    [key: string]: string;
}

interface I18nContextType {
    t: (key: string, replacements?: Record<string, string | number>) => string;
    currentLocale: () => Locale;
    setLocale: (locale: Locale) => void;
    loading: boolean;
}

const translationsMap: Record<Locale, Translations> = {
    en: enTranslations as Translations,
    id: idTranslations as Translations,
};

const I18nContext = createContext<I18nContextType | null>(null);

interface I18nProviderProps {
    children: ReactNode;
    defaultLocale?: Locale;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
    children,
    defaultLocale = 'en',
}) => {
    const [locale, setLocaleState] = useState<Locale>(defaultLocale);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('app-locale');
        if (saved === 'en' || saved === 'id') {
            setLocaleState(saved as Locale);
        }
    }, []);

    const translations = useMemo(() => translationsMap[locale] || {}, [locale]);

    const t = useCallback(
        (
            key: string,
            replacements?: Record<string, string | number>
        ): string => {
            let text = translations[key] || key;

            if (replacements) {
                Object.entries(replacements).forEach(([placeholder, value]) => {
                    text = text.replace(
                        new RegExp(`:${placeholder}`, 'gi'),
                        (match) => {
                            if (match === match.toUpperCase()) {
                                return String(value).toUpperCase();
                            }
                            if (match[1] === match[1].toUpperCase()) {
                                return (
                                    String(value).charAt(0).toUpperCase() +
                                    String(value).slice(1)
                                );
                            }
                            return String(value);
                        }
                    );
                });
            }

            return text;
        },
        [translations]
    );

    const currentLocale = useCallback(() => locale, [locale]);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        if (typeof window !== 'undefined') {
            localStorage.setItem('app-locale', newLocale);
        }
    }, []);

    const value = useMemo(
        () => ({
            t,
            currentLocale,
            setLocale,
            loading,
        }),
        [t, currentLocale, setLocale, loading]
    );

    return (
        <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
    );
};

export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};

export default I18nProvider;
