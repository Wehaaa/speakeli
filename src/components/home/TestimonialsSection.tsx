import Testimonials from "../globals/Testimonials";



const TestimonialsSection = () => {
  const testimonials = Array(3).fill({
    name: "Jean",
    rating: 5,
    text: "En plus de son expertise Elizabeth possède une approche personnalisée, centrée sur ses objectifs, toujours avec bienveillance. Elle utilise toujours des exemples, métaphores, analogies très concrets qui permettent de bien comprendre les concepts et stratégies, sans une touche de méthode traditionnelle. Elle allie technicité et opérationnalité. Les exercices sont très pratiques ! Je recommande à tous les oratrices qui ont besoin d'acquérir plus d'aisance à l'oral dans leurs présentations."
  });
  return (
    <section className="relative py-24 bg-orange-200/80 bg-[radial-gradient(#fac88f_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="font-[Bebas_Neue] text-4xl mb-8">{"Ce qu'ils en pensent"}</h2>
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  )
}

export default TestimonialsSection;