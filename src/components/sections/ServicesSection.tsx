import type { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Smartphone, Palette, CloudCog } from 'lucide-react';

const servicesData: Service[] = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description: 'Building responsive and scalable web applications tailored to your specific business needs using modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Solutions',
    description: 'Crafting intuitive and high-performance native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design Excellence',
    description: 'Creating user-centric and visually appealing designs that enhance user experience and drive engagement.',
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description: 'Optimizing your infrastructure with cloud solutions and DevOps practices for better scalability and efficiency.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing a wide range of software solutions to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col text-center items-center hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
