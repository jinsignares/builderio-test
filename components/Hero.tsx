import React from 'react';
import Image from 'next/image';
import { SMSAnimation } from './SMSAnimation';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

export function Hero({
  title = 'Turn absence management into a <strong>productivity engine</strong>',
  subtitle,
  description = 'Fixing absences is just the start. TeamSense delivers instant ROI through automated call-offs — building the digital connection that links every worker, workflow, and insight driving frontline productivity.',
  buttonText = 'Book a Demo',
  buttonLink = '/demo',
  image,
}: HeroProps) {
  return (
    <section className="bg-brand-teal-10 text-white py-16 md:py-24 font-urbanist">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" 
                dangerouslySetInnerHTML={{ __html: title.replace('<strong>', '<strong class="text-brand-gold-50">') }} 
            />
          </div>
          
          {description && (
            <div className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
          )}

          <div className="flex flex-wrap gap-4 mt-4">
             {/* Button 1 */}
              <a
                href={buttonLink || '#'}
                className="inline-block bg-brand-gold-50 text-brand-teal-20 px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-gold-20 hover:text-white transition shadow-lg"
              >
                {buttonText}
              </a>
              
              {/* Button 2 */}
              <a
                href="/roi-calculator"
                className="inline-block bg-brand-teal-40 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-teal-30 transition shadow-lg"
              >
                Calculate your ROI
              </a>
          </div>

           {/* Footer Text */}
           <p className="text-white font-bold text-sm md:text-base mt-4 max-w-lg">
             Employees call off by text — no app, no training. Supervisors get instant visibility, HR gets clean data, and production keeps moving.
           </p>

        </div>

        <div className="relative w-full flex items-center justify-center">
          {image ? (
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl bg-white/10">
              <Image 
                src={image} 
                alt="Hero Image" 
                fill 
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full">
              <SMSAnimation />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
