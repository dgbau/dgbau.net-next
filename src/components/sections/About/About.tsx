import { useState } from 'react';
import Link from 'next/link';

import styles from './Hero.module.scss';

const handleClick = (e, setCurrent) => {
  console.log('click', e.key);
  setCurrent(e.key);
};

export default function About(props: any) {
  return (
    <div className={styles.container}>
      <div className={`${styles.main_welcome}`}>
        <h1 className={`bp3-heading`}>Welcome.</h1>
        <p>Site is under construction, pardon the mess :)</p>
      </div>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   let url = `${process.env.IEX_API_URL}/stock/${'AAPL'}/chart/${'90d'}?token=${
//     process.env.IEX_TOKEN
//   }
//   `;
//   const res = await fetch(url);
//   const data: Data = await res.json();
//   // console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// };
