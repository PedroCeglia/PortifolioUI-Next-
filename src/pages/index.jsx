import { EstruturaPagina, IntroSection, AboutMeSection, HistoricoSection, TechSection, ContactMeSection } from "@/components/Home";

export default function Home() {
  return (
    <EstruturaPagina>
      <IntroSection/>
      <AboutMeSection/>
      <HistoricoSection/>
      <TechSection/>
      <ContactMeSection/>
      <span>Entre em Contato</span>
    </EstruturaPagina>
  )
}
