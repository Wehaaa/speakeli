import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Rate from "../globals/reassurance/Rate";

const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-40 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-20 min-h-[calc(100vh-210px]">
          <div className="flex flex-col items-start justify-center gap-10 ">
            <div>
              <h1 className="text-7xl font-[Bebas_Neue] tracking-tight">
                  {"Maîtrisez l'anglais"}
              </h1>
              <p className="text-lg text-gray-700">pour atteindre vos objectifs professionnels</p>
            </div>
            <div className="text-[15px] text-gray-700">
              <p className="font-semibold">CV - Entretien - Prise de poste - Gestion de projet international</p>
              <p>{"Je vous redonne confiance pour vous affirmer en anglais avec professionnalisme et être aussi agile qu’en français"}</p>
            </div>
            <Button 
              variant="default" 
              size="lg"
              className="relative h-16 px-9 bg-orange-200 hover:bg-[#f4be85] cursor-pointer"
              >
              {/* before:absolute before:content-[''] before:top-[8px] before:right-[8px] before:w-full before:h-full before:bg-slate-800 before:-z-10 */}
              <span>PARLONS-EN </span>
              <ArrowRightIcon size={48} className="ml-2 h-5 w-5 stroke-3" />
            </Button>
            <Rate />
          </div>
          <div className="max-w-[40%]">
            <div className="relative w-full aspect-square">
              <Image 
                src="/assets/images/elisabeth-speakeli.jpg"
                alt="Elisabeth de Speakeli"
                width={1000}
                height={1000}
                style={{ objectFit: 'cover' }}
                priority
                className="relative z-10"
              />
              <div className="absolute z-0 -top-12 -right-12 w-full h-full bg-orange-200"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;