'use client';



import Apresentacao from "@/componentes/apresentacao";
import Sobre from "@/app/sobre/page";
import Projetos from "@/app/projetos/page";
import Contato from "@/app/contato/page";
import Rodape from "@/componentes/rodape";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <div className={estilos.div}>


      <main>
        <Sobre />
        <Projetos />
      </main>


    </div>
  );
}
