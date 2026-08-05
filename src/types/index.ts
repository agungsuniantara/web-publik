export interface Category {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
}

export interface User {
    id: string | number;
    name: string;
    email: string;
    avatar?: string | null;
}

export interface Course {
    id: string;
    category_id?: string | null;
    title: string;
    slug: string;
    image_url?: string | null;
    image_path?: string | null;
    description?: string | null;
    duration: number;
    is_active: boolean;
    is_locked: boolean;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
    category?: Category | null;
    instructors?: User[];
    modules?: any[];
}

export interface Blog {
    id: string;
    author_id?: string | null;
    title: string;
    slug: string;
    category?: string | null;
    keywords?: string[] | null;
    excerpt?: string | null;
    content?: string | null;
    cover_image?: string | null;
    cover_image_path?: string | null;
    status: string;
    published_at?: string | null;
    created_at: string;
    updated_at: string;
    author?: User | null;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    first_page_url?: string;
    last_page_url?: string;
    next_page_url?: string | null;
    prev_page_url?: string | null;
}
