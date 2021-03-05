import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import Nav from '../Nav/Nav';

const name = 'DG Bau';
export const siteTitle = 'dgbau.net';

export default function Layout({ children, home = false }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta name='description' content='David G. Bau Portfolio Site' />
        </Head>
        {/* <header className={styles.header}>
        <Nav className={styles.nav}></Nav>
      </header> */}
        <nav className={styles.nav}>
          <Nav></Nav>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <p> © 2021 David Bau</p>
        <p>Made with ❤️ and next.js</p>
      </footer>
    </>
  );
}
