
import './Produtos.css';
import { useEffect, useState } from "react";
import { getMaquiagem } from "../services/maquiagemService";
import type { Maquiagem } from "../types/Maquiagem";
import CardProduto from "../components/CardProdutos/CardProduto";
import Carrossel from "../components/Carrossel/Carrossel";
import Header from "../components/Header/Header";
import { useLocation } from 'react-router-dom';


export default function Produtos() {

    const [maquiagem, setMaquiagem] = useState<Maquiagem[]>([]);
    const location = useLocation();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');

    const fetchMaquiagem = async () => {
        try {
            const dados = await getMaquiagem();

            if (termo_pesquisado) {
                const dados_filtrados = dados.filter(m =>
                    m.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    m.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    m.categorias.some(cat => cat.toLowerCase().includes(termo_pesquisado.toLowerCase()))
                );
                setMaquiagem(dados_filtrados);
            } else
                setMaquiagem(dados);
        } catch (error) {
            console.error("Erro ao executar getMaquiagem: ", error);
        }
    }

    useEffect(() => {
        fetchMaquiagem();
        console.log("Termo pesquisado: ", termo_pesquisado);

    }, [termo_pesquisado])

    return (
        <>
            <Header />
            <main>
                <Carrossel />
                <section className="container" />
                <h1 className="acessivel">produtos de maquiagem</h1>
                <div className="titulo">
                    <span> {
                        termo_pesquisado ? `Resultados para ${termo_pesquisado}` : "Nome da categoria"
                    } </span>
                    <hr />
                </div>

                <section className="cards">
                    {

                        maquiagem.map((m: Maquiagem) => (
                            <CardProduto
                                key={m.id}
                                nome={m.nome}
                                descricao={m.descricao}
                                preco={m.preco}
                                imagemUrl={m.imagens[0] ?? ""}
                                peso={m.peso}
                            />
                        ))
                    }

                </section>
            </main >
        </>
    )

}