import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const guides = [
  {
    id: 1,
    title: "Guide de survie aux Meetings",
    description: [
      "Vous êtes frustré de ne pas vous sentir aussi agile dans les réunions en anglais qu’en français ? Grâce à ce guide, prenez enfin confiance en vous ! ",
      "Ouvrir une réunion, gérer les interruptions, trouver un compromis, etc.  plus de 14 thèmes couverts par +300 expressions authentiques pour mener vos réunions en anglais de main de maître. "
    ],
    imageUrl: "/api/placeholder/600/400",
    imageAlt: "Guide de survie aux Meetings",
    buttonText: "J'en profite"
  },
  {
    id: 2,
    title: "Offre 2",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      "Cras venenatis euismod malesuada. Nullam ac erat ante. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."
    ],
    imageUrl: "/api/placeholder/600/400",
    imageAlt: "Offre 2",
    buttonText: "J'en profite"
  }
];


interface Guide {
  id: number;
  title: string;
  description: string[];
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
}

const GuideCard = ({ guide }: { guide: Guide }) => {
  return (
    <Card className="flex flex-col">
      <CardContent className="p-8">
        <div className="relative w-full h-64 bg-orange-200 overflow-hidden mb-8">
          <div className="absolute w-full h-full bg-orange-900/20" />
        </div>
        <h3 className="font-bebas text-2xl font-semibold mb-4">{guide.title}</h3>
        {guide.description.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </CardContent>
      <CardFooter className="mt-auto px-8">
        <Button variant="default" className="w-full py-6">{guide.buttonText}</Button>
      </CardFooter> 
    </Card>
  );
};

const GuidesPDF = () => {
  return (
    <section className="relative py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2 className="font-bebas text-4xl  mb-16 text-center">
          Mes guides PDF pour progresser dès maintenant
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-orange-200/80 z-0">
      </div>
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:3rem_2rem]"></div>
        <div className="absolute left-0 right-0 top-0 translate-y-[-10%] m-auto w-[70vh] aspect-square rounded-full bg-yellow-50 opacity-50 blur-[100px]"></div>
      </section>
  );
};

export default GuidesPDF;