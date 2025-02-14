import { Bebas_Neue, Montserrat } from "next/font/google";
import "@/app/globals.css";

const bebasNeue = Bebas_Neue({ 
  weight: '400', // Ajout du weight obligatoire
  subsets: ["latin"],
  variable: '--font-bebas-neue'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat' // Ajoutez ceci
});

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
};
 
export default async function RootLayout({
  children,
 }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={`${bebasNeue.className} ${montserrat.className}`}>
        <div></div>
        {/* <Header />
        <main>
          {children}
        </main>
        <Footer /> */}
      </body>
    </html>
  );
}