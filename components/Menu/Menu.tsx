import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { StyledMenu, StyledBurger, StyledSidebar } from './menu.styles';

import { navLinks } from '../../settings/config';

export default function Menu(props: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const wrapperRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //   const onKeyDown = (e) => {
  //     switch (e.key) {
  //       case KEY_CODES.ESCAPE:
  //       case KEY_CODES.ESCAPE_IE11: {
  //         setMenuOpen(false);
  //         break;
  //       }

  //       case KEY_CODES.TAB: {
  //         if (menuFocusables && menuFocusables.length === 1) {
  //           e.preventDefault();
  //           break;
  //         }
  //         if (e.shiftKey) {
  //           handleBackwardTab(e);
  //         } else {
  //           handleForwardTab(e);
  //         }
  //         break;
  //       }

  //       default: {
  //         break;
  //       }
  //     }
  //   };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    // setFocusables();
    return () => {
      // document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <div ref={wrapperRef}>
        <StyledBurger menuOpen={menuOpen} ref={buttonRef} onClick={toggleMenu} bgcolor='red'>
          <div className='ham-box'>
            <div className='ham-box-inner' />
          </div>
        </StyledBurger>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i} onClick={() => setMenuOpen(false)}>
                    <Link href={url}>{name}</Link>
                  </li>
                ))}
              </ol>
            )}
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
}
