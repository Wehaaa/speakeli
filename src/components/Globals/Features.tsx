import React from 'react';
import Image from 'next/image';

// Types
interface Feature {
  title: string;
  description: string[];
  image: string;
  reverse: boolean;
}

// Suppression de l'interface vide FeatureItemProps qui étend simplement Feature
type FeatureItemProps = Feature;

// Data
const featuresData: Feature[] = [
  {
    title: "Décrocher un entretien",
    description: [
      "CV, Découverte, lettre de motivation en anglais, profil LinkedIn optimisé.",
      "Je vous aide à préparer votre CV en anglais afin de décrocher l'entretien avec le poste que vous convient."
    ],
    image: "/assets/images/candidate.jpg",
    reverse: false
  },
  {
    title: "Convaincre vos interlocuteurs",
    description: [
      "Expression orale fluide (plus de 10k expressions opératoires).",
      "Je vous aide à structurer le récit de votre expérience professionnelle pour convaincre vos interlocuteurs et obtenir le poste et de missions qui vous font vibrer."
    ],
    image: "/assets/images/convince.jpg",
    reverse: true
  },
  {
    title: "Mener des réunions en anglais efficacement",
    description: [
      "Mener une conversation avec des natifs, prendre des notes, comprendre des chiffres ou un projet.",
      "Je vous aide à exprimer vos idées avec clarté et à j'intègre avec élégance pendant les réunions."
    ],
    image: "/assets/images/meetings.jpg",
    reverse: false
  }
];

// Feature Item Component
const FeatureItem: React.FC<FeatureItemProps> = ({ 
  title, 
  description, 
  image, 
  reverse 
}) => {
  const contentOrder = reverse ? "flex-row-reverse" : "";
  
  return (
    <div className={`flex ${contentOrder} items-center gap-24`}>
      <div className="flex-1">
        <h2 className="font-[Bebas_Neue] text-4xl mb-8">{title}</h2>
        {description.map((text, index) => (
          <p key={index} className="text-gray-600 mb-4 last:mb-0">{text}</p>
        ))}
      </div>
      <div className="w-1/2 bg-orange-100 relative h-[400px]">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

// Main Features Component
const Features: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-24 px-8 space-y-24">
      {featuresData.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;