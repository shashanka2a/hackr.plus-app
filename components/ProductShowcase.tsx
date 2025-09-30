"use client";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Rocket, Scale, UserCheck, ArrowRight } from "lucide-react";

export function ProductShowcase() {
  const products = [
    {
      icon: Rocket,
      title: "HackHost",
      subtitle: "Effortless Hackathon Management",
      description: "AI-powered launch, team matching, support bot",
      gradient: "from-violet-500 to-purple-600",
      features: ["AI-powered setup", "Smart team matching", "24/7 support bot"],
      url: "https://hackhost.club/"
    },
    {
      icon: Scale,
      title: "HackHub", 
      subtitle: "Streamlined Judging & Hosting",
      description: "Judge allocation, live scoring, sponsor tracking",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Automated judging", "Real-time scoring", "Sponsor dashboard"],
      url: "https://hackhub.app/"
    },
    {
      icon: UserCheck,
      title: "HackHire",
      subtitle: "Hire from Code, Not Resumes", 
      description: "Real coding challenges, automated evaluation",
      gradient: "from-cyan-500 to-teal-600",
      features: ["Live coding tests", "AI evaluation", "Talent pipeline"],
      url: "https://www.hackhire.dev/"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Three Powerful Products,
            <br />
            <span className="gradient-text">One Unified Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run successful hackathons and build amazing teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card 
                className="bg-white border-gray-200 hover:border-gray-300 transition-all duration-300 group-hover:scale-105 cursor-pointer backdrop-blur-sm shadow-lg group-hover:shadow-xl"
              >
                <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-2 text-gray-900">{product.title}</h3>
                <p className="text-lg text-gray-700 mb-3">{product.subtitle}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="text-violet-500 hover:text-violet-600 hover:bg-violet-50 p-0 h-auto group/btn"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}