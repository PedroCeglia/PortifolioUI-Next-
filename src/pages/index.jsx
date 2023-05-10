import { EstruturaPagina, Intro, AboutMe, Historico } from "@/components/Home";

export default function Home() {
  return (
    <EstruturaPagina>
      <Intro/>
      <AboutMe/>
      <Historico/>
      <span>Dados</span>
      <span>Tecnologias</span>
    </EstruturaPagina>
  )
}
