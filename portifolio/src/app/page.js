'use client';
import {useState} from "react";

import Topo from "@/componentes/Topo";
import Apresentacao from "@/componentes/Apresentacao";
import Sobre from "@/componentes/Sobre";
import Projetos from "@/componentes/Projetos";
import Contato from "@/componentes/Contato";
import Rodape from "@/componentes/Rodape";
import estilos from "./page.module.css";

export default function Home() {
  const [ehTemaEscuro, setTemaEscuro] = useState(false);

  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <>
      <header>
        <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      </header>

      <main>
        <Apresentacao ehTemaEscuro={ehTemaEscuro} />
        <Sobre ehTemaEscuro={ehTemaEscuro} />
        <Projetos ehTemaEscuro={ehTemaEscuro} />
      </main>

      <section>
        <Contato ehTemaEscuro={ehTemaEscuro} />
      </section>

      <footer>
        <Rodape ehTemaEscuro={ehTemaEscuro} />
      </footer>
    
    </>
  );
}
