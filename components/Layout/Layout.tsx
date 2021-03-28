import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../styles';
import Loader from '../Loader/Loader';

import Theme from '../Theme/Theme';

// import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import Nav from '../Nav/Nav';

const name = 'DG Bau';
export const siteTitle = 'dgbau.net';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({ children, home = false }) {
  const [isLoading, setIsLoading] = useState(home);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <Head>
        <meta name='description' content='David G. Bau Portfolio Site' />
      </Head>
      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {isLoading && home ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={home} />
              {/* <Social isHome={isHome} />
              <Email isHome={isHome} /> */}

              <div id='content'>
                {children}
                {/* <Footer /> */}
                <footer className={''}>
                  <p> © 2021 David Bau</p>
                  <p>Made with ❤️ and next.js</p>
                </footer>
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
}
