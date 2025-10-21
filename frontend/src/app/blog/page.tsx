import React from 'react';

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
            <div className="grid gap-6">
                {/* Example blog posts */}
                <article className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-2">First Blog Post</h2>
                    <p className="text-gray-600 mb-4">Published on January 1, 2024</p>
                    <p className="text-gray-800">
                        This is a sample blog post content. Replace this with your actual blog post content.
                    </p>
                </article>

                <article className="bg-white rounded-lg shadow-md p-6">
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