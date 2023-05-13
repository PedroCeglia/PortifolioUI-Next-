import { EstruturaPagina, IntroSection, AboutMeSection, HistoricoSection, TechSection } from "@/components/Home";

export default function Home() {
  return (
    <EstruturaPagina>
      <IntroSection/>
      <AboutMeSection/>
      <HistoricoSection/>
      <TechSection/>
      <span>Relatos</span>
      <span>Entre em Contato</span>
    </EstruturaPagina>
  )
}
