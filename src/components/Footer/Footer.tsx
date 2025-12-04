import './Footer.css'
import whatsapp from '../../assets/whatsapp_icone.svg'
import insta from '../../assets/instagram_icone.svg'

export default function Footer() {
    return (
        <footer>
            <section className='rodape'>
                <div>
                    <p>LÚMEA: SUA ESSÊNCIA EM EQUILÍBRIO, ONDE SAÚDE BEM-ESTAR E BELEZA SE ENCONTRAM
                        PARA TRANSFORMAR VIDAS.
                    </p>
                </div>

                <div className="redes_sociais">
                    <img className="whatsapp" src={whatsapp} alt="icone do whatsapp" />
                    <img className="insta" src={insta} alt="icone do instagram" />
                </div>

            </section>
        </footer>
    )
}