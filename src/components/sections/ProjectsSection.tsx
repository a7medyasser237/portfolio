import type { Project } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData: Project[] = [
  {
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    title: 'E-commerce Platform Alpha',
    description: 'A comprehensive e-commerce solution with advanced features for product management, secure payments, and order tracking.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard chart',
    title: 'Project Management Tool Beta',
    description: 'A collaborative tool designed to streamline project workflows, task assignments, and progress monitoring for teams.',
    tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
    liveUrl: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app interface',
    title: 'Social Networking App Gamma',
    description: 'A mobile application connecting like-minded individuals through shared interests and local events.',
    tags: ['React Native', 'GraphQL', 'AWS Amplify'],
    sourceUrl: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data analytics',
    title: 'Data Analytics Dashboard Delta',
    description: 'An enterprise-level dashboard for visualizing complex datasets and generating actionable insights for business intelligence.',
    tags: ['Python (Flask)', 'D3.js', 'MongoDB'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the innovative solutions we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed min-h-[3.75rem]">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.liveUrl && (
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title}`}>
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
