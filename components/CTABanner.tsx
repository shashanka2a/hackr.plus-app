"use client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-90"></div>
          <div className="absolute inset-0 bg-gray-900/20"></div>
          
          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-4xl md:text-6xl mb-6 text-white">
              Build. Judge. Hire.
              <br />
              <span className="text-white/90">Everything Hackathons,</span>
              <br />
              <span className="text-white/90">in One Place.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the future of hackathons and discover talent like never before
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg border-0 group shadow-lg"
            >
              Join Hackr.plus Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5 blur-lg"></div>
        </div>
      </div>
    </section>
  );
}