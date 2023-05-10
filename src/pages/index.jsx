import { EstruturaPagina, IntroSection, AboutMeSection, HistoricoSection } from "@/components/Home";

export default function Home() {
  return (
    <EstruturaPagina>
      <IntroSection/>
      <AboutMeSection/>
      <HistoricoSection/>
      <span>Tecnologias</span>
      <span>Relatos</span>
      <span>Entre em Contato</span>
    </EstruturaPagina>
  )
}
