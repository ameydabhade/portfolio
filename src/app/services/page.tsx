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
                  <CardTitle className="text-xl text-center">ESSENTIAL PROFESSIONAL PRESENCE</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">$799</span>
                  </div>
                  <p className="text-sm text-center text-muted-foreground italic mt-2">
                    A professional online presence for individuals or small businesses
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Custom-coded responsive website</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>3-5 pages (Home, About, Services, etc.)</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Mobile-optimized design</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Basic SEO setup</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>GDPR-compliant contact form</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>SSL security certificate</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Social media integration</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>2-3 weeks delivery</span>
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
                  <CardTitle className="text-xl text-center">ENHANCED PROFESSIONAL SOLUTION</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">$1,199</span>
                  </div>
                  <p className="text-sm text-center text-muted-foreground italic mt-2">
                    A more comprehensive website for established businesses
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>All ESSENTIAL features</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Up to 8 pages of content</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Team/staff profiles</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Client testimonials section</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Blog/news capability</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Google Maps integration</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Enhanced SEO features</span>
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
                  <CardTitle className="text-xl text-center">COMPLETE BUSINESS PLATFORM</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">$1,999</span>
                  </div>
                  <p className="text-sm text-center text-muted-foreground italic mt-2">
                    A fully-featured website with additional functionality
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>All ENHANCED features</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Custom design elements</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Basic enquiry/booking system</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Document download area</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>FAQ section</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Image gallery</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Advanced contact forms</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>4-5 weeks delivery</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Maintenance Services */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Maintenance Services</h3>
              <div className="max-w-2xl mx-auto">
                <Card className="border-2 border-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">TECHNICAL MAINTENANCE PACKAGE</CardTitle>
                    <div className="text-center mt-2">
                      <span className="text-2xl font-bold">$149</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-center text-muted-foreground italic mt-2">
                      Available only for websites with backend functionality
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Regular code updates</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Security monitoring</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Database management</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Booking system maintenance</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Form processing support</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Technical troubleshooting</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>Monthly performance report</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button asChild className="w-full md:w-auto">
                        <Link href="/contact">Inquire Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Add-on Options */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Add-on Options</h3>
              <div className="max-w-md mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Enhance your package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left pb-2">Service</th>
                          <th className="text-right pb-2">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3">Additional pages</td>
                          <td className="py-3 text-right">$69 per page</td>
                        </tr>
                        <tr>
                          <td className="py-3">Basic booking system</td>
                          <td className="py-3 text-right">$249</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Our Approach */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">What Sets Our Websites Apart</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">Custom Development</h4>
                    <p className="text-muted-foreground">Hand-coded websites for better performance and security</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">Accessibility Compliance</h4>
                    <p className="text-muted-foreground">All sites meet WCAG standards for accessibility</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">GDPR Built-in</h4>
                    <p className="text-muted-foreground">Data protection compliance included from the ground up</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">Mobile-optimized</h4>
                    <p className="text-muted-foreground">Perfect functionality across all devices</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">Secure by Design</h4>
                    <p className="text-muted-foreground">Enhanced security features for your information</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Payment Terms */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Payment Terms</h3>
              <div className="max-w-lg mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                        <span>50% deposit to commence work</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                        <span>50% upon completion before site launch</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                        <span>Maintenance packages billed monthly or quarterly</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Next Steps */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Next Steps</h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mb-4">
                        1
                      </div>
                      <h4 className="font-semibold mb-2">Select your package</h4>
                      <p className="text-sm text-muted-foreground">Choose the option that best fits your needs</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mb-4">
                        2
                      </div>
                      <h4 className="font-semibold mb-2">Schedule consultation</h4>
                      <p className="text-sm text-muted-foreground">Discuss your specific requirements</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mb-4">
                        3
                      </div>
                      <h4 className="font-semibold mb-2">Receive proposal</h4>
                      <p className="text-sm text-muted-foreground">Get a tailored proposal with timeline</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mb-4">
                        4
                      </div>
                      <h4 className="font-semibold mb-2">Begin development</h4>
                      <p className="text-sm text-muted-foreground">Start the process of creating your website</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Terms & Conditions</h3>
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>All packages include one round of revisions. Additional revisions charged at $59/hour.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Hosting recommendations provided separately based on specific needs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Content (text and images) to be provided by the client.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Project timelines begin once all required content has been received.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                *Prices valid as of {new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
              </p>
              <Button asChild variant="default" size="lg" className="rounded-full">
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
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