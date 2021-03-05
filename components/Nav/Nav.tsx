import { useState } from 'react';
import Link from 'next/link';

import styles from './Nav.module.scss';

const handleClick = (e, setCurrent) => {
  console.log('click', e.key);
  setCurrent(e.key);
};

export default function Nav(props: any) {
  return (
    <div className={styles.nav}>
      <ul>
        <li className={styles.navitem}>
          <Link href='/'>
            <a>
              <h2>David Bau</h2>
            </a>
          </Link>
        </li>
        <hr />
        <li className={styles.navitem}>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
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
