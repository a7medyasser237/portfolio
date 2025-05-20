import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected named import
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Aperture Landing | Innovative Software Solutions',
  description: 'Portfolio of Alex Johnson, owner of Aperture Solutions, showcasing software development services and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        GeistSans.variable is a className string that injects the font-face
        and the CSS variable (--font-geist-sans).
        font-sans utility from Tailwind will then use this variable.
      */}
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
