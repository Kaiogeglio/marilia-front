import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@Overstack</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Image 
          src="/logo.png"
          width={220}
          height={40}
        />
        <h1 className={styles.title}>Seja bem-vindo!</h1>

        <div className={styles.event}>
          <Image 
            src="/logo-dmw.png"
            width={330}
            height={110}
          />
          <p>Evento Online e Gratuito</p>
          <button>Inscreva-se!</button>
        </div>
        <div className={styles.grid}>
          <a href="https://www.youtube.com/channel/UCr9L-arygsO1V4XU4AVnhWw" className={styles.card}>
            <h3>Youtube &rarr;</h3>
            <p>Séries com conteúdos gratuitos e Imersivos.</p>
          </a>

          <a href="https://app.overstack.com.br" className={styles.card}>
            <h3>Plataforma &rarr;</h3>
            <p>Cursos gratuitos sobre programação (HTML, CSS, JS, REACT e NODE).</p>
          </a>

          <a href="https://overstack.com.br" className={styles.card}>
            <h3>Site Over &rarr;</h3>
            <p>Conheça o nosso método e entenda como vamos te ajudar a ser foda!</p>
          </a>

          <a 
            href="https://programacao.eniac.com.br"
            className={styles.card}
          >
            <h3>Site Graduação &rarr;</h3>
            <p>Gradu-se e torne-se um desenvolvedor Full-Stack em um ano.</p>
          </a>

          <a
            href="https://discord.gg/JVsN84BW72"
            className={styles.card}
          >
            <h3>Comunidade &rarr;</h3>
            <p>
              Tenha acesso a milhares de Dev's, conteúdos e notícias em primeira mão.
            </p>
          </a>
          <a
            href="https://medium.com/overstack"
            className={styles.card}
          >
            <h3>Blog no Medium &rarr;</h3>
            <p>
              Siga nosso blog para ter acesso a notícias exclusivas sobre o mercado DEV.
            </p>
          </a>
          <a
            href="https://web.facebook.com/overstack.tech"
            className={styles.card}
          >
            <h3>Facebook &rarr;</h3>
            <p>
              Nos acompanhe também no Facebook.
            </p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511970792004"
            className={styles.card}
          >
            <h3>WhatsApp &rarr;</h3>
            <p>Converse com um especialista sobre nossos produtos 24/7.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://overstack.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.png" alt="Logo Overstack" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
