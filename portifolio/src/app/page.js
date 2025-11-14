'use client';
import { useState } from "react";


import Apresentacao from "@/componentes/Apresentacao";
import Sobre from "@/app/Sobre/page";
import Projetos from "@/app/Projetos/page";
import Contato from "@/app/Contato";
import Rodape from "@/componentes/Rodape";
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
