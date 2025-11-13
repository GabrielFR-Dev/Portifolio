'use client';
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import estilos from "./page.module.css";

export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false);

  function trocarTemaPagina() {
    setAlterarTema()
  }

  return (
    <>
    </>
  );
}
