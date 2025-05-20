import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Zap, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving innovation and delivering excellence in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x700.png"
                alt="Alex Johnson, Software Company Owner"
                width={600}
                height={700}
                className="object-cover w-full h-auto"
                data-ai-hint="professional portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Alex Johnson - Owner, Aperture Solutions
            </h3>
            <p className="text-muted-foreground mb-6 text-left leading-relaxed">
              With over a decade of experience in crafting high-quality software, I founded Aperture Solutions to bridge the gap between innovative ideas and tangible, impactful digital products. My passion lies in leveraging technology to solve complex problems and empower businesses to achieve their full potential.
            </p>
            <p className="text-muted-foreground mb-8 text-left leading-relaxed">
              At Aperture Solutions, we believe in a collaborative approach, working closely with our clients to understand their unique needs and deliver solutions that not only meet but exceed expectations. Our commitment to transparency, quality, and client success is the cornerstone of everything we do.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <Zap className="h-10 w-10 text-accent mb-3" />
                <h4 className="font-semibold text-lg text-foreground">Innovation</h4>
                <p className="text-sm text-muted-foreground">Constantly exploring new technologies.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <Award className="h-10 w-10 text-accent mb-3" />
                <h4 className="font-semibold text-lg text-foreground">Quality</h4>
                <p className="text-sm text-muted-foreground">Delivering robust and reliable solutions.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-accent mb-3" />
                <h4 className="font-semibold text-lg text-foreground">Client-Centric</h4>
                <p className="text-sm text-muted-foreground">Focused on your success and satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
