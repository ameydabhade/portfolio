"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/data";

export default function PortfolioPage() {
  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my projects and see how I can help bring your ideas to life.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full mb-12">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
            Project Image Placeholder
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 