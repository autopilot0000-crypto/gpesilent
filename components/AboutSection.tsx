
import React from 'react';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const coreValues = [
    {
        name: 'Innovation',
        description: 'We constantly seek new and better ways to serve our clients, pushing the boundaries of what\'s possible.'
    },
    {
        name: 'Integrity',
        description: 'We operate with transparency and honesty, building trust through every interaction.'
    },
    {
        name: 'Excellence',
        description: 'We are committed to the highest standards of quality and performance in everything we do.'
    }
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-yellow-400">Silent Profit</span></h2>
                        <p className="text-lg text-gray-400 mb-6">
                            We are a team of passionate experts dedicated to leveraging technology to solve complex financial challenges. Our mission is to empower our clients with the tools and insights they need to succeed in a rapidly evolving digital world.
                        </p>
                        <p className="text-lg text-gray-400">
                            Through a combination of proprietary algorithms, in-depth market analysis, and a commitment to security, we provide a platform that is both powerful and accessible.
                        </p>
                    </div>
                    <div>
                        <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400/20">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Core Values</h3>
                            <ul className="space-y-5">
                                {coreValues.map(value => (
                                    <li key={value.name} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white">{value.name}</h4>
                                            <p className="text-gray-400">{value.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
