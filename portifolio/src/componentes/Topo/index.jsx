"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import estilos from "./Topo.module.css";
import iconeLua from "../../../public/moon.png";
import iconeSol from "../../../public/sun.png";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";


export default function Topo({ ehTemaEscuro, acao_onclick }) {
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }
    return (
        <header className={ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>

            {/* Menu Desktop */}
            <nav className={estilos.navegacao}>
                <ul className={estilos.menu}>
                    <li><Link href="/" className={estilos.menu_link}>Inicio</Link></li>
                    <li><Link href="/sobre" className={estilos.menu_link}>Sobre</Link></li>
                    <li><Link href="/projetos" className={estilos.menu_link}>Projetos</Link></li>
                    <li><Link href="/contato" className={estilos.menu_link}>Contato</Link></li>
                </ul>
            </nav>


           
            <p className={estilos.paragrafo_mobile}>Portifólio</p>
        
            {/* Botão Hamburguer (mobile) */}
            <button className={estilos.hamburguer} onClick={toggleMenu}>
                {menuAberto ? <MdClose /> : <CiMenuBurger/>}

            </button>

            {/* Menu Mobile */}
            {menuAberto && (
                <nav className={estilos.menu_mobile}>
                    <Link href="/" onClick={toggleMenu}>Inicio</Link>
                    <Link href="/sobre" onClick={toggleMenu}>Sobre</Link>
                    <Link href="/projetos" onClick={toggleMenu}>Projetos</Link>
                    <Link href="/contato" onClick={toggleMenu}>Contato</Link>
                    <button onClick={acao_onclick} className={estilos.botao}>
                        <Image
                            className={estilos.icones}
                            src={ehTemaEscuro ? iconeLua : iconeSol}
                            alt="Icone"
                            title={ehTemaEscuro ? "Tema Escuro" : "Tema claro"}
                        />
                    </button>
                </nav>
            )}
            <button onClick={acao_onclick} className={estilos.botao_desktop}>
                <Image
                    className={estilos.icones}
                    src={ehTemaEscuro ? iconeLua : iconeSol}
                    alt="Icone"
                    title={ehTemaEscuro ? "Tema Escuro" : "Tema claro"}
                />
            </button>


        </header>
    );
}
