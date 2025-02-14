import { StarIcon } from "lucide-react";

interface RateProps {
  theme?: 'dark' | 'light';
  className?: string;
}

const Rate: React.FC<RateProps> = () => {

  return (
    <div className="flex items-center space-x-2">
      <div className="flex text-yellow-500 text-lg leading-none align-top gap-0.25">
      {[...Array(5)].map((_, index) => (
        <StarIcon 
          key={index} 
          className="w-4 h-4" 
          fill="oklch(0.795 0.184 86.047)" 
        />
      ))}
      </div>
      <span className="text-sm leading-none">4.7/5 - 197 avis</span>
    </div>
  );
};

export default Rate;


 
 
 
 
