
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const features = [
    {
        title: "Automatic GPE v4 Robot",
        description: "The GPE v4 Robot intelligently analyzes market trends and identifies the optimal direction for trades, ensuring strategic decision-making.",
        points: ["Market Direction Mastery", "Precise Position Entry", "Fully Autonomous Operation"]
    },
    {
        title: "Zero Risk Trading",
        description: "The 'Zero Risk Trading' feature of the GPE v4 Robot is designed to automatically protect your profits. When a trade reaches a specified profit level, the robot moves the stop loss to the entry price, ensuring your trade is risk-free.",
        points: ["Automatic Profit Protection", "Eliminates Trading Risk", "Secures Capital", "Protects Profits from Market Reversals"]
    },
    {
        title: "Automatic Profit Lock",
        description: "The 'Automatic Profit Lock' feature of the GPE v4 Robot ensures your profits are kept safe. As the market continues to move in your favor, the robot intelligently adjusts your protection level, locking in accumulated profits without any manual intervention from you.",
        points: ["Automatic Profit Adjustment", "Hands-Free Profit Management", "Maximize Good Trend Profits", "Smart Trailing System"]
    },
    {
        title: "Smart Layering System",
        description: "The Smart Layering System of the GPE v4 Robot is designed to safely add trading positions when the market is still in an optimal entry zone. This is not a martingale system, but a smart layering strategy to optimize profits.",
        points: ["Safe Position Scaling", "Smart Entry Zone Detection", "Risk-Controlled Layering", "Maximizing Profit Potential"]
    },
    {
        title: "Spread Filter",
        description: "The Spread Filter system of the GPE v4 Robot is designed to avoid entering trading positions during periods of high spread. This includes times of major news or uncertain market conditions, ensuring the robot only operates when the market is calm and stable.",
        points: ["Avoids High-Cost Entries", "Protection from Market Volatility", "Ensures Optimal Entry Times", "Maintains Trading Efficiency"]
    },
    {
        title: "Auto Trend Reversal Protection",
        description: "The GPE v4 Robot is designed to react to strong market trend changes by automatically closing or reversing positions. This mechanism ensures your capital protection is prioritized, allowing the robot to quickly adapt to changing market conditions.",
        points: ["Automatic Trend Detection", "Capital Protection Priority", "Smart Position Management", "Prevents Major Losses"]
    },
    {
        title: "News Protection Mode",
        description: "The GPE v4 Robot is equipped with an advanced 'News Protection Mode' feature. When this mode is activated, the robot will stop new trade entries during major news events but will continue to manage existing positions carefully. This ensures you are not exposed to excessive trading risks in uncertain market conditions.",
        points: ["Halts New Entries", "Manages Existing Positions", "Avoids Over-Trading", "Protects from News Volatility"]
    },
    {
        title: "Manual Panel (v4.1+)",
        description: "The GPE v4.1+ Robot introduces an innovative 'Manual Panel' feature, allowing you to control the robot directly from the chart. This feature provides the ability to turn the robot on/off, check its status, and monitor layers directly without opening any menus.",
        points: ["Direct Control from Chart", "Real-Time Status Monitoring", "Live Layer Tracking", "No Menu Navigation Needed"]
    },
    {
        title: "BONUS: User Guide",
        description: "Ensure optimal performance by following these recommended usage guidelines for the GPE v4.1+ Robot.",
        points: ["Use XAU/USD (Gold) pair", "M1 or M5 Timeframe", "Avoid changing settings during active trades", "Ensure 24-hour online VPS"]
    },
];

const RobotFeaturesSection: React.FC = () => {
    return (
        <section id="robot-features" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Robot GPE V4 Features</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Explore the advanced technology that powers the GPE V4 robot, designed for precision, safety, and performance.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg border border-yellow-400/20 shadow-lg flex flex-col">
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{feature.description}</p>
                            <ul className="space-y-2">
                                {feature.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-center text-gray-300 text-sm">
                                        <CheckIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RobotFeaturesSection;
