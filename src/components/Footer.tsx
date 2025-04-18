"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { navLinks, socialLinks } from "@/lib/data";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const iconMap = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold block mb-4">
              Amey Dabhade
            </Link>
            <p className="text-muted-foreground mb-4">
              Creating beautiful, responsive websites and web applications with
              modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Frontend Development
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Backend Development
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                UI/UX Design
              </Link>
            </nav>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Pune, Maharashtra, India</p>
              <p>
                <a
                  href="mailto:ameydabhade4@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  ameydabhade4@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+918600595546"
                  className="hover:text-foreground transition-colors"
                >
                  +91 8600595546
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Amey Dabhade. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 