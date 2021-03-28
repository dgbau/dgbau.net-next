import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

import { getSortedPostsData } from '../lib/posts';
import Hero from '../components/sections/Hero/Hero';
import About from '../components/sections/About/About.jsx';

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
      <main>
        <Hero></Hero>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   console.log(context);
//   return {
//     props: {
//       test: 'test',
//     },
//   };
// }
