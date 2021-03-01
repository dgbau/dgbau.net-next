import { useState } from 'react';
import Link from 'next/link';

import css from './Nav.module.scss';

const handleClick = (e, setCurrent) => {
  console.log('click', e.key);
  setCurrent(e.key);
};

export default function Nav(props: any) {
  const [current, setCurrent] = useState('home');
  return <div>Menu</div>;
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
