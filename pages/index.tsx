import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { Card, Button, Elevation } from '@blueprintjs/core';

import Layout from '../components/Layout/Layout';

import styles from '../styles/Home.module.scss';

import { getSortedPostsData } from '../lib/posts';

const onSubmit = () => {
  console.log('onSubnit');
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>//∆ß</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Card className={`${styles.main_card}`} elevation={Elevation.TWO}>
          <h1 className={`bp3-heading`}>Welcome.</h1>
          <p>If you're seeing this site, come back soon! Site is under construction.</p>
          <hr />
          <br />
          <Button>Contact Me</Button>
        </Card>

        {/* <p className={styles.code}>
          <code className='.bp3-monospace-text'>Made with ❤️ and next.js</code>
        </p> */}
      </main>

      {/* <footer className={styles.footer}>
        <p> © 2021 David Bau</p>
        <p>Made with ❤️ and next.js</p>
      </footer> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getServerSideProps(context) {
//   console.log(context);
//   return {
//     props: {
//       test: 'test',
//     },
//   };
// }
