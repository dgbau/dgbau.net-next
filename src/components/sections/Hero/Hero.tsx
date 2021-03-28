import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from './Hero.module.scss';

const HeroStyles = styled.div`
  h1 {
    color: whitesmoke;
  }
  p {
    color: grey;
  }
`;

const initMessage = 'Site is now under construction, pardon the mess :)';

export default function Hero(props: any) {
  const [message, setMessage] = useState(initMessage);

  return (
    <HeroStyles>
      <section className={styles.section}>
        <div className={`${styles.callout}`}>
          <h1>Welcome.</h1>
          <p>{message}</p>
        </div>
      </section>
    </HeroStyles>
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
