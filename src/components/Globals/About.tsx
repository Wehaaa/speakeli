import { Play } from 'lucide-react';

interface VideoConfig {
  buttonSize: number;
  buttonColor: string;
}

interface AboutData {
  title: string;
  description: string;
  video: VideoConfig;
}

const aboutData: AboutData = {
  title: "Qui suis-je ?",
  description: "Je suis Elisabeth DEMOURY. Grâce à ma double expérience en tant que prof d'anglais et RH internationale chez L'ORÉAL, j'ai accompagné +300 cadres dirigeants dans leur transition professionnelle.",
  video: {
    buttonSize: 32,
    buttonColor: "black"
  }
};

const About = () => {
  const { title, description, video } = aboutData;
  
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="-mx-16 flex justify-center items-center gap-12">
        <div className="aspect-3/2 w-3/5 bg-orange-200 overflow-hidden relative group">
          <button 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-full p-6 shadow-lg
                       transition-all duration-300 ease-in-out
                       group-hover:scale-110 group-hover:shadow-xl"
          >
            <Play 
              size={video.buttonSize} 
              fill={video.buttonColor} 
              className="relative left-0.5 text-black"
            />
          </button>
        </div>
        <div className="flex-1">
          <h2 className="font-bebas text-4xl font-bold mb-8">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;