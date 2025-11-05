import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
  // Typography - Headings
  h1: ({ children, ...props }) => (
    <h1
      className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="scroll-m-20 text-3xl font-semibold tracking-tight py-1"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight py-1"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight py-1"
      {...props}
    >
      {children}
    </h4>
  ),

  // Typography - Paragraph
  p: ({ children, ...props }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  ),

  // Typography - Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
      {children}
    </blockquote>
  ),

  // Typography - Lists
  ul: ({ children, ...props }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,

  // // Typography - Inline Code
  // code: ({ children, ...props }) => {
  //   // Check if it's a code block (pre > code) or inline code
  //   const isInline =
  //     props.className === undefined || !props.className.includes("language-");

  //   if (isInline) {
  //     return (
  //       <code
  //         className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
  //         {...props}
  //       >
  //         {children}
  //       </code>
  //     );
  //   }

  //   // For code blocks, return as-is (usually handled by pre)
  //   return <code {...props}>{children}</code>;
  // },

  // Typography - Lead (for introductions)
  lead: ({ children, ...props }) => (
    <p className="text-muted-foreground text-xl" {...props}>
      {children}
    </p>
  ),

  // Typography - Large
  large: ({ children, ...props }) => (
    <div className="text-lg font-semibold" {...props}>
      {children}
    </div>
  ),

  // Typography - Small
  small: ({ children, ...props }) => (
    <small className="text-sm leading-none font-medium" {...props}>
      {children}
    </small>
  ),

  // Typography - Muted
  muted: ({ children, ...props }) => (
    <p className="text-muted-foreground text-sm" {...props}>
      {children}
    </p>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
