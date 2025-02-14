// data/coachingData.ts
import { PageContent } from '@/types/coaching';

export const pageContent: PageContent = {
  hero: {
    topText: "coaching en anglais professionnel",
    title: "My job interview",
    subtitle: "C'est le moment de réussir votre entretien.",
    buttonText: "Let's go"
  },

  intro: [
    "Avec \"My Job Interview\", je vous propose un coaching sur mesure pour réussir cette étape cruciale.",
    "Grâce à ma méthode pragmatique, avec des exercices pratiques et des conseils personnalisés, vous serez prêt à convaincre les recruteurs, que ce soit en France ou à l'étranger.",
    "Forte d'une double expertise unique en tant qu'ancienne RH internationale chez L'Oréal et prof d'anglais certifiée, j'ai aidé des centaines de cadres et dirigeants à atteindre leurs objectifs professionnels.",
    "Vous bénéficierez d'une approche structurée, incluant des vidéos de préparation et un coaching individuel sur mesure.",
    "Ensemble, nous travaillerons sur votre pitch, votre storytelling et vos réponses aux questions les plus complexes.",
    "Ce coaching est conçu pour vous : cadres et dirigeants préparant un entretien en anglais.",
    "Que ce soit pour un poste dans une grande entreprise internationale (comme Amazon ou Google), une entreprise de taille intermédiaire, une PME ou une start-up."
  ],

  testimonials: Array(3).fill({
    name: "Jean",
    rating: 5,
    text: "En plus de son expertise Elizabeth possède une approche personnalisée, centrée sur ses objectifs, toujours avec bienveillance. Elle utilise toujours des exemples, métaphores, analogies très concrets qui permettent de bien comprendre les concepts et stratégies, sans une touche de méthode traditionnelle. Elle allie technicité et opérationnalité. Les exercices sont très pratiques ! Je recommande à tous les oratrices qui ont besoin d'acquérir plus d'aisance à l'oral dans leurs présentations."
  }),

  methodSection: {
    videoContent: [
      {
        title: "Les différences entre un entretien en anglais et en français",
        description: "approche culturelle, vocabulaire spécifique, attentes des recruteurs"
      },
      {
        title: "Comment se présenter efficacement (pitch)",
        description: "structuration, impact et confiance"
      },
      {
        title: "Les questions basiques",
        description: "votre parcours professionnel, vos motivations, forces et faiblesses"
      },
      {
        title: "Les questions pièges",
        description: "comment gérer les zones sensibles (trou dans le CV, changement de carrière)"
      },
      {
        title: "La méthode STAR",
        description: "apprendre à structurer vos réponses de manière claire et convaincante"
      },
      {
        title: "Les questions comportementales",
        description: "exemples de leadership, gestion de conflit, travail en équipe"
      },
      {
        title: "Les questions hypothétiques",
        description: "réagir à des scénarios professionnels"
      },
      {
        title: "Comment poser des questions pertinentes à la fin de l'entretien",
        description: "montrer votre intérêt et votre préparation"
      },
      {
        title: "Le langage corporel et le ton",
        description: "transmettre confiance et crédibilité"
      },
      {
        title: "Les erreurs à éviter",
        description: "faux amis, maladresses culturelles et réponses clichées"
      }
    ],
    coachingSessionText: "Selon votre échéance, nous choisissons ensemble la date qui vous convient le mieux pour être prêt le jour-J. Vous pouvez prendre le temps de regarder les vidéos et de préparer un maximum votre pitch, ou alors nous pouvons trouver un créneau rapidement si votre entretien d'embauche se profile. Notre séance de coaching se fait à distance, en visio (par Zoom, Skype, Google Meet… you name it !) Ensuite, je vous envoie un récapitulatif par mail avec le vocabulaire pertinent, les phrases clés pour faire la différence, et quelques exercices ciblés de grammaire ou de conjugaison si besoin, adaptés à votre niveau."
  },

  faq: [
    {
      question: "Combien de temps dure un coaching d'anglais ?",
      answer: "Tout dépend de vos objectifs et de votre niveau de départ. Un coaching dure généralement entre 10 et 30 heures à raison d'une séance hebdomadaire, soit entre 3 et 8 mois. Entre chaque séance, vous bénéficiez de listes de vocabulaire à réviser, de leçons de grammaire, de vidéos explicatives et d'exercices ciblés."
    },
    {
      question: "Dois-je avoir un bon niveau pour commencer un coaching en anglais ?",
      answer: "Le coaching est adapté à tous les niveaux, mais un niveau d'utilisateur indépendant est préférable pour tirer pleinement profit du coaching (niveaux B1-B2 selon le CECRL)."
    },
    {
      question: "Combien de temps dure le coaching entretien d'embauche « My Job Interview » ?",
      answer: "Les 10 vidéos cumulent une durée totale d'environ 2 heures. Vous pouvez prendre le temps que vous souhaitez pour travailler votre pitch et réfléchir à vos réponses aux différents types de questions présentées dans les vidéos. Ensuite, notre séance de coaching individuel dure entre 1 heure et 1 heure et demi. A la fin du coaching, vous bénéficiez de vocabulaire clé, de phrases pour faire la différence et d'exercices ciblés pour progresser en grammaire et conjugaison."
    },
    {
      question: "Dois-je avoir un bon niveau pour suivre le coaching entretien en anglais ?",
      answer: "Le coaching est adapté à tous les niveaux, mais un niveau d'utilisateur indépendant est préférable pour tirer pleinement profit du coaching (niveaux B1-B2 selon le CECRL : Cadre Européen Commun de Référence pour les Langues)."
    },
    {
      question: "Est-ce que l'intégralité du coaching se fait en ligne ?",
      answer: "Oui. Vous regardez les vidéos de n'importe où et vous pouvez préparer tranquillement votre pitch et vos réponses à tous les types de questions. Ensuite, notre séance de coaching se fait à distance, en visio (par Zoom, Skype, Google Meet… you name it !)"
    },
    {
      question: "Quel est le prix du coaching entretien d'embauche « My Job Interview » ?",
      answer: "Le tarif global est de 250€ TTC pour l'accès total et illimité aux vidéos de préparation + notre séance de coaching individuel + votre récapitulatif écrit."
    },
    {
      question: "Puis-je financer coaching entretien d'embauche avec le CPF ?",
      answer: "Non, le coaching « My Job Interview » ne peut pas être financé par le CPF. Pourquoi ? Parce que mon approche est axée sur un accompagnement sur mesure et hautement personnalisé, bien au-delà des formations standardisées éligibles au CPF. Le CPF finance des formations en langues « classiques » dont le but est de passer une certification ou un test (TOIEC, TOEFL, Cambridge, IELTS, etc.) Mon objectif est de vous offrir une expérience unique et adaptée, qui va droit au but et garantit des résultats concrets."
    },
    {
      question: "Comment savoir si j'ai besoin d'un coach pour préparer mon entretien d'embauche ?",
      answer: "Vous avez besoin d'un coach pour préparer votre entretien si : vous manquez de confiance lorsque vous devez parler anglais en contexte professionnel, vous n'avez pas beaucoup de temps pour vous préparer, vous ne savez pas quelles sont les attentes des recruteurs lors d'un entretien en anglais, vous avez besoin de conseils personnalisés, vous voulez maximiser vos chances face à une opportunité cruciale, vous n'êtes pas sûr de l'efficacité de votre préparation actuelle."
    }
  ],
  cta: {
    text: "Prêt·e à décrocher le job de vos rêves ?",
    secondaryText: "",
    buttonText: "Oui c'est parti"
  }
};