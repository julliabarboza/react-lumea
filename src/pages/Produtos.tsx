import banner_1 from "../assets/banner.png"
import banner_2 from "../assets/banner2.png"
import banner_3 from "../assets/banner3.png"
import './Produtos.css';
import { useEffect, useState } from "react"
import { getMaquiagem } from "../services/bolosService"
import type { Maquiagem } from "../types/Maquiagem"


export default function Produtos() {

    const [maquiagem, setMaquiagem] = useState<Maquiagem[]>([]);

    const fetchMaquiagem = async () => {
        try {
            const dados = await getMaquiagem();
            console.log("Lista de Maquiagem vinda da API: ", dados);
            setMaquiagem(dados);
        } catch (error) {
            console.error("Erro ao executar getMaquiagem: ", error);
        }
    }

    useEffect(() => {
        fetchMaquiagem();
    }, [])




    return (

        <main>

            <div id="carouselExampleAutoplaying" className="carousel slide carousel_personalizado" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="container" />
            <h1 className="acessivel">produtos de maquiagem</h1>
            <div className="titulo">
                <span>Maquiagem</span>
                <hr />
            </div>

            <section className="cards">
                {

                    maquiagem.map((m: Maquiagem) => (
                        <div className="card_produto">
                            <img src={`http://localhost:3000/static/${m.imagens[0]}`} alt={"Imagem do produto: " + m.descricao} />
                            <h2>{m.nome}</h2>
                            <p>{m.descricao}</p>
                            <span>{m.preco}</span>
                        </div>
                    ))
                }

            </section>

        </main>
    )

}