import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const formations = [
    {
      title: "MY JOB INTERVIEW",
      duration: ["10 vidéos", "+ 1h de coaching individuel"],
      price: "250€",
      promise: "Pour réussir votre entretien",
      content: [
        "2h de vidéos de conseils, méthodes et exercices pratiques pour préparer vos entretiens",
        "Le vocabulaire et la grammaire qui vous feront sortir du lot",
        "Une simulation d’entretien avec moi en visio pour être at the top of your game le jour J ✨",
      ]
    },
    {
      title: "MY NEXT JOB",
      duration: ["45 vidéos", "+ exercices pratiques"],
      price: "245€",
      promise: "Pour décrocher votre dream job",
      content: [
        "+7h de vidéos de conseils, méthodes et exercices pratiques pour vous permettre de faire la différence.",
        "Les outils de la recherche d’emploi en anglais (CV, lettre de motivation, profil Linkedin, entretien)",
        "Le vocabulaire et la grammaire qui vous feront sortir du lot",
        "Un programme de formation pour vous accompagner tout au long de votre transition 🪜",
      ]
    },
    {
      title: "COACHING SUR-MESURE",
      duration: ["10h, 20h ou 30h"],
      price: "Devis sur demande",
      promise: "Pour un accompagnement quotidien",
      content: [
        "Un coaching axé sur la pratique de l’oral afin de gagner en aisance et fluidité.",
        "Des séances individuelles structurées entre pratique et débriefing (points de grammaire, vocabulaire, etc.).",
        "Un accompagnement centré sur vos besoins précis pour atteindre votre objectif du moment ✨",
      ]
    }
  ];

  return(
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2 className="font-bebas text-4xl mb-16 text-center">Mes formations</h2>
        <div className="grid grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <div key={index} className="relative">
              <div className="bg-white">
                <div className="relative w-full text-center text-orange-900 flex flex-col items-center py-5 bg-orange-300/70">
                  <div className="relative text-[75%] z-10 uppercase">{formation.promise}</div>
                  <div className="absolute bottom-[-10px]">
                  <div className="w-0 h-0 
                    border-l-[10px] border-l-transparent
                    border-t-[10px] border-t-orange-300/70
                    border-r-[10px] border-r-transparent">
                  </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white">
                  <div className="
                    flex flex-col justify-center items-center
                    w-full
                    pt-12
                    pb-10
                    px-10
                    text-center 
                    ">
                    <h3 className="font-bebas text-3xl">{formation.title}</h3>
                    <hr className="w-16 my-4 border-2 border-orange-200" />
                    <div className="h-16 mb-4 py-2 px-4">
                        {formation.duration.map((duration, i) => (
                        <div key={i} className={`mr-2 ${i === 0 ? 'text-md font-bold' : ''}`}>
                          {duration}
                        </div>
                        ))}
                    </div>
                    <div className="
                      relative
                      flex flex-col justify-center items-center
                      mt-4
                      px-6 py-3
                      bg-white
                      border border-orange-200
                      z-10 
                      ">
                        <div className="font-bebas text-2xl tracking-wide">
                          {formation.price}
                        </div>
                      </div>
                  </div>
                  <div className="p-10 pt-0">
                    <ul className="space-y-4 text-[15px]">
                      {formation.content.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto px-10 pb-10">
        
                    <Link href="/service" className={buttonVariants({ variant: "default", size: "lg", className: "px-16" })}>
                      {"Let's go"}
                      <ArrowRightIcon className="w-6 h-6 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-orange-200/80">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 translate-y-[-10%] m-auto w-[70vh] aspect-square rounded-full bg-yellow-50 opacity-50 blur-[100px]"></div>
        </div>
      </div>
    </section>
  )
}

export default Services;