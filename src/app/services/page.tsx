"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Layout, Server, Layers, Palette, Zap, Shield } from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  code: <Code className="h-12 w-12" />,
  layout: <Layout className="h-12 w-12" />,
  server: <Server className="h-12 w-12" />,
  layers: <Layers className="h-12 w-12" />,
  palette: <Palette className="h-12 w-12" />,
  zap: <Zap className="h-12 w-12" />,
  shield: <Shield className="h-12 w-12" />,
};

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services I Offer</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized web development services to help businesses establish a strong online 
              presence and achieve their digital goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      {/* @ts-ignore */}
                      {iconMap[service.icon] || <Code className="h-12 w-12" />}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Transparent pricing options to fit various project needs and budgets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <Card className="relative overflow-hidden border-2 border-muted">
                <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-center">Basic Website</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">$599</span>
                    <span className="text-muted-foreground"> starting</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Up to 5 pages</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Basic SEO setup</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Contact form</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>2 weeks delivery</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Standard Package */}
              <Card className="relative overflow-hidden border-2 border-primary">
                <div className="absolute inset-x-0 top-0 h-2 bg-primary"></div>
                <CardHeader className="pt-8">
                  <div className="absolute top-4 right-4 bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
                    Popular
                  </div>
                  <CardTitle className="text-xl text-center">Business Website</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">$1,299</span>
                    <span className="text-muted-foreground"> starting</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Up to 10 pages</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Advanced SEO optimization</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Blog/News section</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Custom contact forms</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>3-4 weeks delivery</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Premium Package */}
              <Card className="relative overflow-hidden border-2 border-muted">
                <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-center">E-commerce / Web App</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">$2,999</span>
                    <span className="text-muted-foreground"> starting</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Custom web application</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>User authentication</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Payment integration</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Admin dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>6-8 weeks delivery</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Need a custom solution? Contact me for a personalized quote.
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <div className="mt-16 lg:mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">How I Work</h2>
                <p className="text-muted-foreground">
                  My process is designed to make our collaboration smooth and
                  effective, ensuring your project is delivered on time and to
                  your satisfaction.
                </p>

                <div className="space-y-8 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Discovery & Planning
                      </h3>
                      <p className="text-muted-foreground">
                        We'll discuss your goals, requirements, and vision for
                        your project to create a solid foundation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Design & Development
                      </h3>
                      <p className="text-muted-foreground">
                        I'll create wireframes, designs, and then develop your
                        project with regular updates and feedback.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Testing & Launch
                      </h3>
                      <p className="text-muted-foreground">
                        Thorough testing ensures your project works flawlessly
                        before we launch it to the world.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Support & Maintenance
                      </h3>
                      <p className="text-muted-foreground">
                        I provide ongoing support to ensure your digital
                        presence continues to perform optimally.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-muted rounded-lg p-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Let's Get Started</h2>
                  <p className="text-muted-foreground">
                    Ready to discuss your project? Get in touch today to schedule
                    a consultation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Book a free 30-minute consultation to discuss your project
                      requirements and goals.
                    </p>
                    <Button asChild>
                      <Link href="/contact">
                        Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-background rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Have Questions?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Not ready to book yet? Send me a message with any
                      questions you have.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/contact">
                        Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 