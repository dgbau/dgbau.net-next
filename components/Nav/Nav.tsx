import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../../settings/config';
import Menu from '../Menu/Menu';

import styles from './Nav.module.scss';

const handleClick = (e, setCurrent) => {
  console.log('click', e.key);
  setCurrent(e.key);
};

export default function Nav(props: any) {
  return (
    <div className={styles.header}>
      <div className={styles.navLogo}>
        <Link href='/'>
          <a>
            <div>//∆</div>
          </a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <ul>
          {navLinks.map((navLink, i) => (
            <li className={styles.navitem} key={i}>
              <Link href={navLink.url}>
                <a>{navLink.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Menu />
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
