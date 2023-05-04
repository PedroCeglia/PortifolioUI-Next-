import { EstruturaPagina, Intro, AboutMe } from "@/components/Home";

export default function Home() {
  return (
    <EstruturaPagina>
      <Intro/>
      <AboutMe/>
      <span>Tragetoria</span>
      <span>Dados</span>
      <span>Tecnologias</span>
    </EstruturaPagina>
  )
}
