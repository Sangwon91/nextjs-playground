import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';


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

                <article className={
                    clsx(
                        "bg-white hover:bg-gray-100 rounded-lg shadow-md p-6",
                        `${inter.className} antialiased`,
                    )
                }>
                    <h2 className="text-2xl font-semibold mb-2">Second Blog Post</h2>
                    <p className="text-gray-600 mb-4">Published on January 2, 2024</p>
                    <p className="text-gray-800">
                        This is another sample blog post content. Replace this with your actual blog post content.
                        <br />
                        Can I write in Korean? 네, 한국어로 작성할 수 있습니다.
                    </p>
                </article>

                <article>
                    <Image
                        src="/dog.jpg"
                        alt="Sample Blog"
                        width="200"
                        height="200"
                        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
                    />
                    <h2 className="text-2xl font-semibold mt-4">Blog Post with Image</h2>
                    <p className="text-gray-600 mb-4">Published on January 3, 2024</p>
                    <p className="text-gray-800">
                        This blog post includes an image to enhance the content visually.
                    </p>
                </article>
            </div>
        </div>
    );
}