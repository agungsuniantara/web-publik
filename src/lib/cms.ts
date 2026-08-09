import { Blog, PaginatedData } from '@/types';

export interface CmsFaqItem {
    id: number;
    question: string;
    answer: string;
    order: number;
    is_active: boolean;
}

export interface CmsSiteSettings {
    [key: string]: string;
}

export interface CmsProgram {
    id: string;
    title: string;
    slug: string;
    age_group: 'kids' | 'teens' | 'adults';
    level?: string;
    excerpt?: string;
    description?: string;
    duration?: string;
    price_text?: string;
    cover_image?: string;
    cover_image_path?: string;
    syllabus_highlights?: string[];
    is_featured: boolean;
    is_active: boolean;
    order: number;
    created_at?: string;
    updated_at?: string;
}

const getCmsApiUrl = () => {
    return process.env.NEXT_PUBLIC_CMS_API_URL || 'https://cms.umacoding.com/api';
};

export const getCmsBaseUrl = () => {
    return process.env.NEXT_PUBLIC_CMS_URL || 'https://cms.umacoding.com';
};

/**
 * Format media image URLs coming from CMS
 */
export function getCmsMediaUrl(path?: string | null): string | null {
    if (!path) return null;
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    const cmsBase = getCmsBaseUrl();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    if (cleanPath.startsWith('/storage/')) {
        return `${cmsBase}${cleanPath}`;
    }
    return `${cmsBase}/storage${cleanPath}`;
}

/**
 * Fetch paginated blog posts from Custom CMS
 */
export async function getCmsBlogs(search?: string, page?: string, perPage: number | string = 12): Promise<PaginatedData<Blog>> {
    const baseUrl = getCmsApiUrl();
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (page) params.append('page', page);
    params.append('per_page', perPage.toString());

    const targetUrl = `${baseUrl}/blogs?${params.toString()}`;
    try {
        const res = await fetch(targetUrl, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.warn(`CMS API blogs returned status ${res.status} for URL ${targetUrl}`);
            return { data: [], current_page: 1, last_page: 1, per_page: 12, total: 0 };
        }

        const data: PaginatedData<Blog> = await res.json();
        if (data && Array.isArray(data.data)) {
            data.data = data.data.map((blog) => ({
                ...blog,
                cover_image_path: getCmsMediaUrl(blog.cover_image_path || blog.cover_image) || undefined,
            }));
        }
        return data;
    } catch (error) {
        console.error(`Failed to fetch blogs from CMS targetUrl "${targetUrl}":`, error);
        return { data: [], current_page: 1, last_page: 1, per_page: 12, total: 0 };
    }
}

/**
 * Fetch a single blog post by slug from Custom CMS
 */
export async function getCmsBlogBySlug(slug: string): Promise<Blog | null> {
    const baseUrl = getCmsApiUrl();
    try {
        const res = await fetch(`${baseUrl}/blogs/${encodeURIComponent(slug)}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            if (res.status !== 404) {
                console.warn(`CMS API blog detail returned status ${res.status}`);
            }
            return null;
        }

        const blog: Blog = await res.json();
        if (blog) {
            blog.cover_image_path = getCmsMediaUrl(blog.cover_image_path || blog.cover_image) || undefined;
        }
        return blog;
    } catch (error) {
        console.error(`Failed to fetch blog slug "${slug}" from CMS:`, error);
        return null;
    }
}

/**
 * Fetch active FAQs from Custom CMS
 */
export async function getCmsFaqs(): Promise<CmsFaqItem[]> {
    const baseUrl = getCmsApiUrl();
    try {
        const res = await fetch(`${baseUrl}/faqs`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.warn(`CMS API faqs returned status ${res.status}`);
            return [];
        }

        return await res.json();
    } catch (error) {
        console.error('Failed to fetch FAQs from CMS:', error);
        return [];
    }
}

/**
 * Fetch site settings key-value map from Custom CMS
 */
export async function getCmsSettings(): Promise<CmsSiteSettings> {
    const baseUrl = getCmsApiUrl();
    try {
        const res = await fetch(`${baseUrl}/settings`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.warn(`CMS API settings returned status ${res.status}`);
            return {};
        }

        return await res.json();
    } catch (error) {
        console.error('Failed to fetch settings from CMS:', error);
        return {};
    }
}

/**
 * Fetch program catalog from Custom CMS
 */
export async function getCmsPrograms(
    ageGroup?: string,
    search?: string,
    page?: string,
    perPage: number | string = 100
): Promise<PaginatedData<CmsProgram>> {
    const baseUrl = getCmsApiUrl();
    const params = new URLSearchParams();
    if (ageGroup) params.append('age_group', ageGroup);
    if (search) params.append('search', search);
    if (page) params.append('page', page);
    params.append('per_page', perPage.toString());

    try {
        const res = await fetch(`${baseUrl}/programs?${params.toString()}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.warn(`CMS API programs returned status ${res.status}`);
            return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
        }

        const resData = await res.json();
        if (Array.isArray(resData)) {
            return {
                data: resData.map((prog) => ({
                    ...prog,
                    cover_image_path: getCmsMediaUrl(prog.cover_image_path || prog.cover_image) || undefined,
                })),
                current_page: 1,
                last_page: 1,
                per_page: resData.length,
                total: resData.length,
            };
        }

        if (resData && Array.isArray(resData.data)) {
            resData.data = resData.data.map((prog: CmsProgram) => ({
                ...prog,
                cover_image_path: getCmsMediaUrl(prog.cover_image_path || prog.cover_image) || undefined,
            }));
            return resData;
        }

        return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
    } catch (error) {
        console.error('Failed to fetch programs from CMS:', error);
        return { data: [], current_page: 1, last_page: 1, per_page: 9, total: 0 };
    }
}

/**
 * Fetch single program detail by slug from Custom CMS
 */
export async function getCmsProgramBySlug(slug: string): Promise<CmsProgram | null> {
    const baseUrl = getCmsApiUrl();
    try {
        const res = await fetch(`${baseUrl}/programs/${encodeURIComponent(slug)}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            if (res.status !== 404) {
                console.warn(`CMS API program detail returned status ${res.status}`);
            }
            return null;
        }

        const prog: CmsProgram = await res.json();
        if (prog) {
            prog.cover_image_path = getCmsMediaUrl(prog.cover_image_path || prog.cover_image) || undefined;
        }
        return prog;
    } catch (error) {
        console.error(`Failed to fetch program slug "${slug}" from CMS:`, error);
        return null;
    }
}
