import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString?: string | null): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(date);
}

/**
 * Truncate page meta title to ensure it stays within Google SERP pixel limit (~561px).
 * Target max length of ~52 characters with clean word boundary truncation.
 */
export function formatMetaTitle(title: string, maxLength = 52): string {
    const trimmed = title.trim();
    if (trimmed.length <= maxLength) return trimmed;

    const truncated = trimmed.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    const safeTitle = lastSpace > 20 ? truncated.substring(0, lastSpace) : truncated;
    return `${safeTitle}...`;
}

