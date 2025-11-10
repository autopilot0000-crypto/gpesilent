
import React from 'react';

const testimonials = [
  {
    quote: "Silent Profit has completely transformed my approach to investment. Their innovative solutions and expert team provided me with the tools I needed to succeed.",
    name: 'Ahmad Kassim',
    title: 'Business Owner'
  },
  {
    quote: "The customer-centric approach at Silent Profit is second to none. They truly understand my needs and have delivered solutions that have exceeded my expectations.",
    name: 'Siti Nurhaliza',
    title: 'Marketing Manager'
  },
  {
    quote: "Working with Silent Profit has been a game-changer for our company. Their dedication to excellence and integrity is evident in everything they do.",
    name: 'Rajesh Kumar',
    title: 'Startup Founder'
  }
];

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Our results speak for themselves. Here's what our clients have to say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                </div>
              <blockquote className="text-gray-300 italic flex-grow">"{testimonial.quote}"</blockquote>
              <div className="mt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-yellow-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
