import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return(
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-[26rem] p-4">
            <Card className="border-0 shadow-none bg-white rounded-none border border-orange-200">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-200 rounded-full overflow-hidden">
                    {/* <img src="/api/placeholder/48/48" alt="avatar" className="w-full h-full object-cover" /> */}
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 leading-[175%]">{testimonial.text}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 lg:-left-12" />
      <CarouselNext className="-right-4 lg:-right-12" />
    </Carousel>
  )
}

export default Testimonials;