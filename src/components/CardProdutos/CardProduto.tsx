import './CardProduto.css';
import maquiagem_default from '../../../api/assets/maquiagem_default.png';
import { formatosService } from '../../services/formatosService';
import type { CardProdutoProps } from '../../types/CardProdutoProps';

export default function CardProduto({ nome, descricao, preco, imagemUrl, id, peso }: CardProdutoProps) {

    return (
        <div key={id} className="card_produto">
            <img src={(imagemUrl.length > 0) ? `http://localhost:3000/static/${imagemUrl}` : maquiagem_default} alt={"Imagem do produto: " + descricao} />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não informada"}</p>
            <div>
                <span>{formatosService.PrecoBR(preco)} / </span>
                <span> {(peso != null) ? formatosService.PesoEmKg(peso) : "qtde não informada"} </span>
            </div>
        </div>
    )
}
