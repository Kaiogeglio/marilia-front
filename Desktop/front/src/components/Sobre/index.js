import image from '../../../public/images/marilia1995.jpg';
import Image from 'next/image'
import Styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={Styles.sobre} id="sobre">
      <div>
        <h2>Marília Mendonça</h2>
        <p className={Styles.ano}>1995 - 2021</p>
        <p>Marília Dias Mendonça nasceu em Cristianópolis (GO) em 22 de julho de 1995, e começou a se destacar como compositora aos 12 anos, com a canção “Minha Herança”. Em 2015, aos 20, ela gravou seu primeiro DVD. No ano seguinte, lançou o segundo, “Realidade”, gravado em Manaus. De lá pra cá, se consolidou como a rainha da sofrência. Entre seus grandes sucessos estão "Infiel", "Saudade do Meu Ex", "Eu sei de Cor", "Todo Mundo Vai Sofrer".</p>

        <p>Fenômeno do feminejo, a artista tinha mais de 37 milhões de seguidores em uma única rede social.Além de músicas em novelas e hits, multidões acompanharam a carreira meteórica de Marília.</p>
      </div>
      <Image
        src={image}
        alt="Marília Mendonça"
      />
    </div>
  )
}

export default Sobre;