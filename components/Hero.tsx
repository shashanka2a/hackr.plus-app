"use client";
import { Button } from "./ui/button";
import { Code, Trophy, Laptop, Users, Zap, Target } from "lucide-react";

export function Hero() {
  const floatingIcons = [
    { Icon: Laptop, delay: "0s", position: "top-20 left-20" },
    { Icon: Trophy, delay: "0.5s", position: "top-32 right-32" },
    { Icon: Code, delay: "1s", position: "bottom-40 left-32" },
    { Icon: Users, delay: "1.5s", position: "bottom-32 right-20" },
    { Icon: Zap, delay: "2s", position: "top-40 left-1/2" },
    { Icon: Target, delay: "2.5s", position: "bottom-20 right-1/2" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20`}
            style={{
              animation: `float 6s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <Icon className="w-8 h-8 text-violet-500" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          <span className="gradient-text">Hackr.plus:</span>
          <br />
          <span className="text-gray-900">The All-in-One</span>
          <br />
          <span className="text-gray-900">Hackathon Hub</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Host smarter, judge faster, hire better — all in one super app.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-primary text-white border-0 px-8 py-6 text-lg hover:scale-105 transition-transform duration-200"
          >
            Get Started Free
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-violet-500 text-violet-500 bg-transparent px-8 py-6 text-lg hover:bg-violet-50 hover:scale-105 transition-all duration-200"
          >
            Explore Demo
          </Button>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
    </section>
  );
}