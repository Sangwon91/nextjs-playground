import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';


export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
            <div className="grid gap-6">
                {/* Example blog posts */}
                <Link href="/">
                    <article className="bg-white hover:bg-gray-100 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-2">First Blog Post</h2>
                        <p className="text-gray-600 mb-4">Published on January 1, 2024</p>
                        <p className="text-gray-800">
                            This is a sample blog post content. Replace this with your actual blog post content.
                        </p>
                    </article>
                </Link>

                <div className={clsx(
                    'hover:shadow-lg',
                    'transition-shadow',
                    'duration-300',
                    'md:text-center')}>
                    ---
                </div>

                <article className="bg-white hover:bg-gray-100 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-2">Second Blog Post</h2>
                    <p className="text-gray-600 mb-4">Published on January 2, 2024</p>
                    <p className="text-gray-800">
                        This is another sample blog post content. Replace this with your actual blog post content.
                    </p>
                </article>
            </div>
        </div>
    );
}