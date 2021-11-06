import Styles from './Menu.module.css';

function Menu() {
  return (
    <div className={Styles.menu}>
      <h1>Marilia Mendonça</h1>
      <div className={Styles.link}>
        <a href="/#sobre">Sobre</a>
        <a href="/#homenagens">Homenagens</a>
      </div>
    </div>

  )
}

export default Menu;