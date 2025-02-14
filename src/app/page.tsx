import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/globals/Features';
import Services from '@/components/home/Services';
import About from '@/components/globals/About';
import GuidesPDF from '@/components/globals/GuidesPDF';
import CallToAction from '@/components/globals/CallToAction';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const SpeakeliPage = () => {

  return (
    
    <div className="">

      {/* Hero Section */}
      <HeroSection />

      {/* Testimonials - Full width with alternating background */}
      <TestimonialsSection />

      <Features />

      {/* Formations Section */}
      <Services />

      {/* Bio Section */}
      <About />

      {/* Guides PDF Section */}
      <GuidesPDF />

      {/* Call to action */}
      <div className="max-w-6xl mx-auto py-24 space-y-6">
        <CallToAction
          buttonText="Discutons-en"
        />
      </div>

    </div>
  );
};

export default SpeakeliPage;