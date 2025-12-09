import './Footer.css'
import whatsapp from '../../../api/assets/Whatsapp_iconedourado.svg';
import insta from '../../../api/assets/Instagram_iconedourada.svg';

export default function Footer() {
    return (
        <footer>
            <section className='rodape'>
                <div>
                    <p>Lúmea: Sua essência em equilibrio, onde saúde, bem-estar e beleza se encontram para transformar vidas.
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