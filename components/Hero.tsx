import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

export function Hero({
  title = 'Attendance Management Software',
  subtitle = 'TeamSense',
  description = '<p>TeamSense simplifies workforce management with text-based communication, attendance tracking, and HRIS integration—no apps needed.</p>',
  buttonText = 'Book a Demo',
  buttonLink = '/demo',
  image,
}: HeroProps) {
  return (
    <section className="bg-primary-green text-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div>
            {subtitle && (
              <h2 className="text-xl md:text-2xl font-semibold opacity-90 mb-2">{subtitle}</h2>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
          </div>
          
          {description && (
            <div className="text-lg md:text-xl opacity-90 max-w-xl" dangerouslySetInnerHTML={{ __html: description }} />
          )}

          {buttonText && (
            <div className="mt-4">
              <a
                href={buttonLink || '#'}
                className="inline-block bg-white text-primary-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-lg"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>

        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center">
          {image ? (
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="text-center p-8">
              <p className="text-white/60 italic">Animation/Image Placeholder</p>
              <p className="text-sm text-white/40 mt-2">Add an image in Builder.io</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

