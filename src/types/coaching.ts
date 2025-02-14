// types/coaching.ts

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export interface VideoContent {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageContent {
  hero: {
    topText: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  intro: string[];
  testimonials: Testimonial[];
  methodSection: {
    videoContent: VideoContent[];
    coachingSessionText: string;
  };
  faq: FAQItem[];
  cta: {
    text: string;
    secondaryText: string;
    buttonText: string;
  };
}

export interface CallToActionProps {
  theme: 'light' | 'dark';
  text: string;
  secondaryText?: string;
  size: 'sm' | 'lg';
  buttonText: string;
}