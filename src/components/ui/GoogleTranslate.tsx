'use client';

import React, { useEffect, useState, useCallback } from 'react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

interface GoogleTranslateProps {
    onLanguageChange?: (lang: 'en' | 'id') => void;
}

export function getStoredLanguage(): 'en' | 'id' {
    if (typeof document !== 'undefined') {
        const cookies = document.cookie.split('; ');
        const googtrans = cookies.find((row) => row.startsWith('googtrans='));
        if (googtrans) {
            const parts = googtrans.split('=')[1]?.split('/');
            if (parts && parts.length >= 3 && parts[2]) {
                const target = parts[2].toLowerCase();
                if (target === 'en' || target === 'id') {
                    return target as 'en' | 'id';
                }
            }
        }
    }
    return 'id'; // Default source language is ID
}

export function setGoogleTranslateLanguage(targetLang: 'en' | 'id', sourceLang: 'en' | 'id' = 'id') {
    if (typeof document === 'undefined') return;

    const hostname = document.location.hostname;

    if (targetLang === sourceLang) {
        // Clear cookies to return to original page content
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`;
        localStorage.setItem('app-locale', targetLang);
    } else {
        document.cookie = `googtrans=/${sourceLang}/${targetLang}; path=/`;
        document.cookie = `googtrans=/${sourceLang}/${targetLang}; domain=.${hostname}; path=/`;
        localStorage.setItem('app-locale', targetLang);
    }

    window.location.reload();
}

export default function GoogleTranslate({ onLanguageChange }: GoogleTranslateProps) {
    const pageLanguage = 'id'; // Base content language in CMS is Indonesian

    useEffect(() => {
        const STATIC_CONTAINER_ID = 'google-translate-static-container';

        let container = document.getElementById(STATIC_CONTAINER_ID);
        if (!container) {
            container = document.createElement('div');
            container.id = STATIC_CONTAINER_ID;
            container.style.cssText = 'position: absolute; top: -10000px; left: -10000px; visibility: hidden;';
            document.body.appendChild(container);
        }

        const initWidget = () => {
            const c = document.getElementById(STATIC_CONTAINER_ID);
            if (c) {
                c.innerHTML = '';
                if (window.google?.translate?.TranslateElement) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: pageLanguage,
                            includedLanguages: 'en,id',
                            autoDisplay: false,
                        },
                        STATIC_CONTAINER_ID
                    );
                }
            }
        };

        const existingScript = document.querySelector('script[src*="translate.google.com"]');
        if (!existingScript) {
            window.googleTranslateElementInit = initWidget;
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        } else {
            initWidget();
        }
    }, [pageLanguage]);

    useEffect(() => {
        const addNoTranslateToPre = () => {
            document.querySelectorAll('pre, code, .notranslate').forEach((el) => {
                if (!el.classList.contains('notranslate')) {
                    el.classList.add('notranslate');
                }
                if (el.getAttribute('translate') !== 'no') {
                    el.setAttribute('translate', 'no');
                }
            });
        };

        addNoTranslateToPre();

        const observer = new MutationObserver((mutations) => {
            let shouldUpdate = false;
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                    break;
                }
            }
            if (shouldUpdate) {
                addNoTranslateToPre();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <style jsx global>{`
            .goog-te-banner-frame,
            .skiptranslate.goog-te-gadget-simple,
            iframe.skiptranslate,
            iframe.goog-te-banner-frame,
            iframe[src*="translate.google"],
            iframe[id*="goog"],
            .VIpgJd-ZJuEfc-aL92e,
            .VIpgJd-ZJuEfc-h42sbf,
            .VIpgJd-ZJuEfc-LgbsSe,
            #goog-gt-tt,
            .goog-te-balloon-frame,
            .goog-tooltip {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                width: 0 !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }

            body {
                top: 0 !important;
                position: static !important;
            }

            .goog-text-highlight {
                background-color: transparent !important;
                box-shadow: none !important;
            }
        `}</style>
    );
}
