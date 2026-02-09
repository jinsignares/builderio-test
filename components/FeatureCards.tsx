import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  icon?: string;
  link?: string;
}

interface FeatureCardsProps {
  headline?: string;
  cards?: FeatureCard[];
  backgroundColor?: string;
}

export function FeatureCards({ headline, cards, backgroundColor = 'white' }: FeatureCardsProps) {
  return (
    <section className={`py-16 md:py-24 ${backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{headline}</h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards?.map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {card.icon && (
                <div className="w-12 h-12 mb-6 relative">
                  {/* Placeholder for icon handling */}
                  <div className="w-full h-full bg-primary-green/10 rounded-lg flex items-center justify-center text-primary-green">
                    <span className="text-xl">★</span>
                  </div>
                </div>
              )}
              <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              {card.link && (
                <a href={card.link} className="text-primary-green font-semibold hover:underline">
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

FeatureCards.defaultProps = {
  headline: 'Why choose TeamSense?',
  backgroundColor: 'white',
  cards: [
    {
      title: 'No App Required',
      description: 'Employees connect via text message. 100% adoption, zero friction.',
    },
    {
      title: 'Instant Insights',
      description: 'Real-time dashboards show you exactly who is working and who is out.',
    },
    {
      title: 'Seamless Integration',
      description: 'Connects with your existing HRIS and payroll systems effortlessly.',
    },
  ],
};
