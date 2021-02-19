import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dgbau.net</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome.</h1>

        <p className={styles.description}>
          <code className={styles.code}>Made with ❤️ and next.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Projects</h3>
            {/* <p>Past and Present</p> */}
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Research</h3>
            {/* <p>Academic and Personal</p> */}
          </a>

          <a href='https://github.com/vercel/next.js/tree/master/examples' className={styles.card}>
            <h3>About</h3>
            {/* <p>CV and other resources</p> */}
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h3>Contact</h3>
            {/* <p>Get in touch!</p> */}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a href='http://linkedin.com/in/dgbau' target='_blank' rel='noopener noreferrer'> */}©
        2021 David Bau
        {/* </a> */}
      </footer>
    </div>
  );
}
