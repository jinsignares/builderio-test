import React from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
}

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{title}</h2>
        )}
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex-grow">
                <p className="text-lg text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                {testimonial.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.role && testimonial.company && ', '}
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Testimonials.defaultProps = {
  title: 'Trusted by innovative companies',
  testimonials: [
    {
      quote: "TeamSense has revolutionized how we handle absence management. It's simple, fast, and our employees love it.",
      author: "Jane Doe",
      role: "HR Director",
      company: "Acme Corp",
    },
    {
      quote: "The best part is that no app download is required. Adoption was immediate.",
      author: "John Smith",
      role: "Operations Manager",
      company: "Global Mfg",
    },
    {
      quote: "We've seen a 50% reduction in unexcused absences since switching to TeamSense.",
      author: "Sarah Lee",
      role: "Plant Manager",
      company: "Tech Industries",
    },
  ],
};
