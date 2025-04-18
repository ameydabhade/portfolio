"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Layout, Server, Layers, Palette, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-8 w-8" />,
  layout: <Layout className="h-8 w-8" />,
  server: <Server className="h-8 w-8" />,
  layers: <Layers className="h-8 w-8" />,
  palette: <Palette className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
};

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            My Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I offer a range of services to help businesses and individuals create
            impactful digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Learn More About My Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 