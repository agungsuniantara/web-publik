import Link from 'next/link';
import { Blog } from '@/types';

export default function BlogCard({ blog }: { blog: Blog }) {
    const imageUrl = blog.cover_image_path || blog.cover_image;
    const formattedDate = new Date(blog.published_at || blog.created_at).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className="group relative">
            <div className="mb-8 overflow-hidden rounded">
                <Link href={`/blogs/${blog.slug}`} aria-label={blog.title} className="block">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={blog.title}
                            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-125"
                        />
                    ) : (
                        <div className="flex aspect-square w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                            <span className="text-4xl font-bold opacity-30">
                                {blog.title.charAt(0)}
                            </span>
                        </div>
                    )}
                </Link>
            </div>
            {blog.category && (
                <div className="absolute top-0 mt-4 ml-4 rounded bg-primary px-5 py-2">
                    <span className="text-sm font-medium text-white">
                        {blog.category.split(',')[0].trim()}
                    </span>
                </div>
            )}
            <div>
                <h3>
                    <Link
                        href={`/blogs/${blog.slug}`}
                        className="mb-4 inline-block text-[22px] font-semibold leading-8 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                        {blog.title}
                    </Link>
                </h3>
                <span className="text-SereneGray text-sm font-semibold leading-loose">
                    {formattedDate}
                </span>
            </div>
        </div>
    );
}
