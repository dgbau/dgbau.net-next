import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import Nav from '../Nav/Nav';

const name = 'DG Bau';
export const siteTitle = 'dgbau.net';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name='description' content='David G. Bau Portfolio Site' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        <Nav></Nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p> © 2021 David Bau</p>
        <p>Made with ❤️ and next.js</p>
      </footer>
    </div>
  );
}
