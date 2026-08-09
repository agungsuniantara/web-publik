'use client';

import { useState } from 'react';
import BlogCard from '@/components/blogs/BlogCard';
import { Blog, PaginatedData } from '@/types';
import { getCmsBlogs } from '@/lib/cms';
import { Loader2, ArrowDown } from 'lucide-react';

interface BlogListProps {
    initialData: PaginatedData<Blog>;
    search: string;
    perPage: number;
}

export default function BlogList({ initialData, search, perPage }: BlogListProps) {
    const [blogs, setBlogs] = useState<Blog[]>(initialData.data || []);
    const [currentPage, setCurrentPage] = useState<number>(initialData.current_page || 1);
    const [lastPage, setLastPage] = useState<number>(initialData.last_page || 1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLoadMore = async () => {
        if (isLoading || currentPage >= lastPage) return;
        setIsLoading(true);

        try {
            const nextPage = currentPage + 1;
            const res = await getCmsBlogs(undefined, search, nextPage.toString(), perPage);
            
            if (res && res.data) {
                setBlogs((prev) => [...prev, ...res.data]);
                setCurrentPage(res.current_page);
                setLastPage(res.last_page);
            }
        } catch (error) {
            console.error('Failed to load more blogs:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (blogs.length === 0) {
        return (
            <div className="py-16 text-center">
                <p className="text-SlateBlueText dark:text-gray-400 text-lg">
                    Tidak ada artikel yang ditemukan sesuai pencarian Anda.
                </p>
            </div>
        );
    }

    const hasMore = currentPage < lastPage;

    return (
        <div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((post, idx) => (
                    <div
                        key={`${post.id}-${idx}`}
                        data-aos="fade-up"
                        data-aos-delay={(idx % 3) * 100}
                        data-aos-duration="800"
                    >
                        <BlogCard blog={post} />
                    </div>
                ))}
            </div>

            {hasMore ? (
                <div className="mt-14 flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className="group bg-primary hover:bg-primary/90 text-white dark:bg-primary dark:hover:bg-primary/90 inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-4 focus:ring-primary/30 focus:outline-none disabled:opacity-60 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                <span>Memuat Artikel...</span>
                            </>
                        ) : (
                            <>
                                <span>Muat Lebih Banyak Artikel</span>
                                <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                            </>
                        )}
                    </button>
                </div>
            ) : (
                blogs.length > perPage && (
                    <div className="mt-14 text-center">
                        <span className="text-SlateBlueText dark:text-gray-400 text-sm font-medium">
                            Semua artikel telah ditampilkan.
                        </span>
                    </div>
                )
            )}
        </div>
    );
}
