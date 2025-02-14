// CoachingPage.tsx
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Testimonials from "@/components/globals/Testimonials";
import CallToAction from '@/components/globals/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { pageContent } from '@/data/coachingData';
import { CallToActionProps } from '@/types/coaching';

// Types
interface VideoContent {
  title: string;
  description: string;
}

interface MethodSectionContent {
  title: string;
  introText: string;
  videoSection: {
    title: string;
    description: string;
    videos: VideoContent[];
  };
  coachingSection: {
    title: string;
    description: string;
  };
}

// Method Section Component
const MethodSection: React.FC = () => {
  const methodContent: MethodSectionContent = {
    title: "Comment se déroule l'accompagnement aux entretiens en anglais ?",
    introText: "Mon programme « My Job Interview » combine une préparation autonome et un accompagnement personnalisé pour maximiser vos chances de réussite.",
    videoSection: {
      title: "10 vidéos pour vous préparer en autonomie",
      description: "Ces vidéos vous fourniront une base solide pour comprendre les spécificités d'un entretien en anglais :",
      videos: pageContent.methodSection.videoContent
    },
    coachingSection: {
      title: "Une séance de coaching individuel, personnalisée et sur mesure",
      description: pageContent.methodSection.coachingSessionText
    }
  };

  return (
    <>
      <h2>{methodContent.title}</h2>
          
      <p>{methodContent.introText}</p>
      
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">{methodContent.videoSection.title}</h3>
        <p>{methodContent.videoSection.description}</p>
        <ol className="space-y-4 list-decimal list-inside">
          {methodContent.videoSection.videos.map((video, index) => (
            <li key={index} className="pl-4">
              <strong>{video.title}</strong> : {video.description}
            </li>
          ))}
        </ol>
      </div>

      <h3 className="text-2xl font-bold">{methodContent.coachingSection.title}</h3>
      <p>{methodContent.coachingSection.description}</p>
    </>
  );
};

const CoachingPage: React.FC = () => {
  const getCtaProps = (theme: 'light' | 'dark', size: 'sm' | 'lg'): CallToActionProps => ({
    theme,
    size,
    text: pageContent.cta.text,
    buttonText: pageContent.cta.buttonText
  });

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="uppercase text-xs text-orange-900 tracking-wide">{pageContent.hero.topText}</h1>
                <div className="font-bebas text-7xl text-black leading-[80%]">{pageContent.hero.title}</div>
              </div>
              <p className="text-lg font-medium">{pageContent.hero.subtitle}</p>
              <div className="relative inline-block">
                <Button size="lg" className="border-gray-400 z-10 relative overflow-visible rounded-xs h-16 bg-white px-12 shadow-2xl shadow-orange-900/20">
                  <span>{pageContent.hero.buttonText}</span>
                  <span className="text-orange-300">
                    <ArrowRightIcon className="w-6 h-6 ml-2" />
                  </span>
                </Button>
              </div>
            </div>  
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-orange-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/1 w-2/3 aspect-square rounded-full bg-orange-400 blur-[10rem] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[0%] w-2/3 aspect-square rounded-full bg-orange-400 blur-[10rem] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-3/2 rounded-full bg-yellow-100 blur-[10rem] opacity-30"></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--color-orange-300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </section>

      {/* Main Content */}
      <section className="px-8 pb-20">
        <div id="content" className="max-w-5xl mx-auto leading-[175%] space-y-20">
          <h2>{"Vous passez un entretien d'embauche en anglais ?"}</h2>
          <div className="space-y-4">
            {pageContent.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Testimonials testimonials={pageContent.testimonials} />

          <CallToAction {...getCtaProps('light', 'sm')} />

          {/* Section comment ça marche */}
          <MethodSection />

          <div className="mt-20">
            <CallToAction {...getCtaProps('dark', 'sm')} />
          </div>
          
          {/* FAQ Section */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {pageContent.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <CallToAction {...getCtaProps('dark', 'lg')} />
        </div>
      </section>
    </div>
  );
};

export default CoachingPage;