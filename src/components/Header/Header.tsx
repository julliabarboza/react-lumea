import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [pesquisa, setPesquisa] = useState<string>("");
    const navigate = useNavigate(); 

    const handleSearch = () => {
        if (pesquisa.trim()) return; 

        navigate(`/produtos/pesquisa?query=${encodeURIComponent(pesquisa)}`);
        setPesquisa("");

    };

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') {
            handleSearch();
        }
    };

        return (

            <header>
                <Navbar expand="lg" className="container_cabecalho">
                    <div className="cab_col1">

                        <Nav.Item className="icones_esquerda">
                            <svg className="icone_lupa" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640">
                                <path fill="currentColor"
                                    d="M448 272C448 174.8 369.2 96 272 96C174.8 96 96 174.8 96 272C96 369.2 174.8 448 272 448C369.2 448 448 369.2 448 272zM407.3 430C371 461.2 323.7 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 323.7 461.2 371 430 407.3L571.3 548.7C577.5 554.9 577.5 565.1 571.3 571.3C565.1 577.5 554.9 577.5 548.7 571.3L407.3 430z" />
                            </svg>
                        </Nav.Item>

                        <Nav.Item className="container_esquerda">
                            <a href="">Promoções</a>
                            <a href="">Presentes</a>
                            <a href="">Skin Care</a>
                            <a href="">Corpo & Banho</a>
                        </Nav.Item>
                    </div>

                    <img className="lumea_logo" src="./assets/ChatGPT Image 20 de set. de 2025, 17_05_45 1 (1).svg" alt="Logo" />

                </Navbar>
            </header>

        )
    }








