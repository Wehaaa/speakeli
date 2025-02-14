// Navigation Data
const navigationData = {
  mainLinks: [
    // { title: "Accueil", href: "/" },
    { title: "A propos", href: "/a-propos" },
    {
      title: "Mes offres",
      href: "/offres",
      children: [
        {
          title: "Coaching recherche de job",
          href: "/service",
          description: "Un accompagnement personnalisé pour votre recherche d'emploi."
        },
        {
          title: "Coaching entretien",
          href: "/service",
          description: "Préparez-vous efficacement pour vos entretiens d'embauche."
        },
        {
          title: "Guide de survie aux meetings",
          href: "/service",
          description: "Apprenez à gérer efficacement vos réunions professionnelles."
        },
        {
          title: "A la carte",
          href: "/service",
          description: "Des services personnalisés selon vos besoins spécifiques."
        },
        {
          title: "Masterclass & ebook",
          href: "/service",
          description: "Des ressources pour approfondir vos connaissances."
        },
      ]
    },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
}

export default navigationData;