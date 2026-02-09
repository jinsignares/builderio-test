import React from 'react';
import Image from 'next/image';

interface ZPatternProps {
  headline?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

export function ZPattern({
  headline, description, image, imagePosition = 'right', backgroundColor = 'white',
}: ZPatternProps) {
  const isImageRight = imagePosition === 'right';

  return (
    <section className={`py-16 md:py-24 ${backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column - Order based on image position */}
        <div className={`flex flex-col gap-6 ${isImageRight ? 'md:order-1' : 'md:order-2'}`}>
          {headline && <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{headline}</h2>}
          {description && (
            <div className="text-lg text-gray-600 prose" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        {/* Image Column */}
        <div className={`relative aspect-video w-full rounded-lg overflow-hidden shadow-lg ${isImageRight ? 'md:order-2' : 'md:order-1'}`}>
          {image ? (
            <Image
              src={image}
              alt={headline || 'Feature image'}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
              Image Placeholder
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

ZPattern.defaultProps = {
  headline: 'Feature Highlight',
  description: '<p>Describe the feature in detail here. Explain how it benefits the user and why it matters.</p>',
  imagePosition: 'right',
  backgroundColor: 'white',
};
