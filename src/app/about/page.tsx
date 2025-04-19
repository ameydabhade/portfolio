"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { skills } from "@/lib/data";
import { Progress } from "@/components/ui/progress";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I'm Amey Dabhade, a passionate web developer with expertise in creating
                modern, responsive websites and applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-6 shadow-md">
                  <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                    <img src="/Amey.jpeg" alt="Profile" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href="/path-to-resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">
                      Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <h2 className="text-2xl font-bold mb-4">My Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a web developer with over 2 years of experience
                      specializing in creating modern websites and applications
                      that help businesses achieve their goals online.
                    </p>
                    <p>
                      I began my journey in web development during college,
                      where I discovered my passion for coding and creating
                      digital experiences. Since then, I've worked with clients
                      ranging from startups to established businesses, helping
                      them build their online presence.
                    </p>
                    <p>
                      My approach combines technical expertise with an eye for
                      design and a focus on user experience. I believe that the
                      best websites are not just visually appealing but also
                      functional, accessible, and optimized for performance.
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="font-semibold">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-muted-foreground">
                        2018
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold">
                        Web Development Certification
                      </h3>
                      <p className="text-muted-foreground">
                        2019
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-24 bg-card rounded-lg p-8 shadow-sm border"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">My Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index % 6) }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-lg p-8 shadow-sm border"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">My Work Experience</h2>

              <div className="grid grid-cols-1 max-w-3xl mx-auto">
                <div className="border-l-2 border-primary/50 pl-8 pb-12 relative">
                  <div className="absolute w-5 h-5 bg-primary rounded-full -left-[10px] top-0 ring-4 ring-background"></div>
                  <h3 className="font-bold text-xl">Full Stack Developer</h3>
                  <p className="text-primary font-medium">Vigomerge Technologies</p>
                  <p className="text-sm text-muted-foreground mb-4">2024 - Present</p>
                  <p className="text-muted-foreground">
                    Lead development of web applications for clients across
                    various industries. Managed a team of junior developers and
                    implemented best practices for code quality and performance.
                  </p>
                </div>

                <div className="border-l-2 border-primary/50 pl-8 pb-12 relative">
                  <div className="absolute w-5 h-5 bg-primary rounded-full -left-[10px] top-0 ring-4 ring-background"></div>
                  <h3 className="font-bold text-xl">Web Developer</h3>
                  <p className="text-primary font-medium">Freelancer</p>
                  <p className="text-sm text-muted-foreground mb-4">2024 - Present</p>
                  <p className="text-muted-foreground">
                    Developed responsive websites and e-commerce platforms for
                    clients. Collaborated with designers and project managers to
                    deliver projects on schedule and within budget.
                  </p>
                </div>

                <div className="border-l-2 border-primary/50 pl-8 relative">
                  <div className="absolute w-5 h-5 bg-primary rounded-full -left-[10px] top-0 ring-4 ring-background"></div>
                  <h3 className="font-bold text-xl">Full Stack Developer</h3>
                  <p className="text-primary font-medium">Starbox Ad Media</p>
                  <p className="text-sm text-muted-foreground mb-4">2023 - 2024</p>
                  <p className="text-muted-foreground">
                    Assisted in the development of web applications and websites.
                    Gained experience in front-end technologies and responsive
                    design principles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 