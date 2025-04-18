"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Creating Responsive Websites with Tailwind CSS",
    excerpt: "Learn how to build beautiful, responsive websites quickly using Tailwind CSS utility classes.",
    date: "May 15, 2023",
    readTime: "6 min read",
    category: "Web Development",
    slug: "responsive-websites-tailwind-css",
  },
  {
    id: "2",
    title: "Introduction to React Server Components",
    excerpt: "Explore the benefits of React Server Components and how they improve performance in modern web applications.",
    date: "July 22, 2023",
    readTime: "8 min read",
    category: "React",
    slug: "intro-react-server-components",
  },
  {
    id: "3",
    title: "The Future of Web Development in 2024",
    excerpt: "A look at emerging trends and technologies that will shape the future of web development.",
    date: "October 10, 2023",
    readTime: "10 min read",
    category: "Industry Trends",
    slug: "future-web-development-2024",
  },
  {
    id: "4",
    title: "Optimizing Website Performance for Core Web Vitals",
    excerpt: "Tips and strategies to improve your website's Core Web Vitals and provide better user experiences.",
    date: "November 5, 2023",
    readTime: "7 min read",
    category: "Performance",
    slug: "optimizing-core-web-vitals",
  },
  {
    id: "5",
    title: "Building a Portfolio Website with Next.js and Shadcn UI",
    excerpt: "A step-by-step guide to creating a professional portfolio website using Next.js and Shadcn UI components.",
    date: "December 12, 2023",
    readTime: "12 min read",
    category: "Tutorial",
    slug: "portfolio-nextjs-shadcn",
  },
  {
    id: "6",
    title: "Getting Started with TypeScript in React Projects",
    excerpt: "A beginner's guide to integrating TypeScript into your React projects for better type safety.",
    date: "January 18, 2024",
    readTime: "9 min read",
    category: "TypeScript",
    slug: "typescript-react-beginners",
  },
];

export default function BlogPage() {
  return (
    <MainLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, tutorials, and insights on web development and design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-start p-0" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 