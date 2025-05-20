"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4 filter blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full opacity-50 translate-x-1/4 translate-y-1/4 filter blur-2xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-foreground">
          Alex Johnson
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Innovative Software Solutions Tailored for Your Success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105"
            onClick={() => scrollToSection('projects')}
            aria-label="View my projects"
          >
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 shadow-lg transform transition-transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
            aria-label="Contact me"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
