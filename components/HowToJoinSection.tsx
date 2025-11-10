
import React from 'react';

const HowToJoinSection: React.FC = () => {
    return (
        <section id="join" className="py-20 bg-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Join / Getting Started</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Follow these simple steps to begin your journey with Silent Profit.</p>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Step 1 */}
                    <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div className="absolute -top-5 -left-5 bg-yellow-400 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl">01</div>
                        <h3 className="mt-6 text-xl font-bold text-white">Register Account</h3>
                        <p className="text-gray-400 mt-2">Register an account (Official Broker).</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div className="absolute -top-5 -left-5 bg-yellow-400 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl">02</div>
                        <h3 className="mt-6 text-xl font-bold text-white">Make a Deposit</h3>
                        <p className="text-gray-400 mt-2">Deposit a minimum of USD 100.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div className="absolute -top-5 -left-5 bg-yellow-400 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl">03</div>
                        <h3 className="mt-6 text-xl font-bold text-white">Activate Robot</h3>
                        <p className="text-gray-400 mt-2">Contact admin to activate the robot + join the Titan VVIP group.</p>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
                    <a
                        href="https://t.me/fiyzahbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
                    >
                        Contact Admin
                    </a>
                    <a
                        href="https://t.me/SILENTPROFITOFFICIAL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    >
                        Join Our Channel
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowToJoinSection;
