"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Rocket, Code } from "lucide-react";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Web Developer
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
            
              I Build Modern, Fast & Beautiful Websites
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Helping startups, personal brands, and local businesses establish a strong online presence with modern web applications built with React, Next.js, and Node.js.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="/portfolio">
                  <Rocket className="mr-2 h-4 w-4" /> View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">
                  <Code className="mr-2 h-4 w-4" /> Let's Work Together
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] overflow-hidden">
              {/* Browser window mockup that inverts with theme */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`relative w-4/5 h-4/5 rounded-md shadow-lg border overflow-hidden ${isDarkTheme ? "bg-white border-gray-300" : "bg-black border-gray-500"}`}>
                  <div className={`h-8 w-full flex items-center px-3 ${isDarkTheme ? "bg-gray-100" : "bg-gray-900"}`}>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className={`w-full h-6 rounded mb-3 ${isDarkTheme ? "bg-gray-200" : "bg-gray-800"}`}></div>
                    <div className={`w-2/3 h-6 rounded mb-6 ${isDarkTheme ? "bg-gray-200" : "bg-gray-800"}`}></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`h-20 rounded ${isDarkTheme ? "bg-gray-200" : "bg-gray-800"}`}></div>
                      <div className={`h-20 rounded ${isDarkTheme ? "bg-gray-200" : "bg-gray-800"}`}></div>
                      <div className={`h-20 rounded ${isDarkTheme ? "bg-gray-200" : "bg-gray-800"}`}></div>
                      <div className={`h-20 rounded ${isDarkTheme ? "bg-gray-200" : "bg-gray-800"}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 