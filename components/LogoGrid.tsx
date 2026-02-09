import React from 'react';
import Image from 'next/image';

interface Logo {
  name: string;
  image?: string;
}

interface LogoGridProps {
  headline?: string;
  logos?: Logo[];
}

export function LogoGrid({ headline, logos }: LogoGridProps) {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-center text-xl font-semibold text-gray-500 mb-8 uppercase tracking-wider">
            {headline}
          </h2>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {logos?.map((logo) => (
            <div key={logo.name} className="relative h-12 w-32 flex items-center justify-center">
              {logo.image ? (
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <span className="font-bold text-gray-400 text-lg">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

LogoGrid.defaultProps = {
  headline: 'Trusted by industry leaders',
  logos: [
    { name: 'Company A' },
    { name: 'Company B' },
    { name: 'Company C' },
    { name: 'Company D' },
    { name: 'Company E' },
  ],
};
