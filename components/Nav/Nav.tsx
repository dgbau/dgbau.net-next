import { useState } from 'react';
import Link from 'next/link';
import { Navbar, AnchorButton, Button, Alignment, Menu, MenuItem, Icon } from '@blueprintjs/core';
import { Classes, Tooltip2, Popover2 } from '@blueprintjs/popover2';

import styles from './Nav.module.scss';

const handleClick = (e, setCurrent) => {
  console.log('click', e.key);
  setCurrent(e.key);
};

const jsxContent = (
  <em>
    This tooltip contains an <strong>em</strong> tag.
  </em>
);

export default function Nav(props: any) {
  return (
    <div className={styles.nav}>
      <Navbar fixedToTop={true}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <AnchorButton className='bp3-minimal' icon='asterisk' href='/' />
          </Navbar.Heading>
          <Navbar.Divider />
          <AnchorButton className='bp3-minimal' icon='wrench' href='/projects' />
          <AnchorButton className='bp3-minimal' icon='learning' href='/research' />
          <Navbar.Divider />
          <Popover2
            content={
              <Menu className={Classes.CONTEXT_MENU2}>
                <MenuItem icon='social-media' text='Social' href='/social' />
                <MenuItem icon='envelope' text='email' href='/contact' />
                <MenuItem text='chat' href='/chat' />
              </Menu>
            }>
            <Button className='bp3-minimal' icon='chat' />
          </Popover2>
          <Popover2
            content={
              <Menu className={Classes.CONTEXT_MENU2}>
                <MenuItem icon='style' text='theme' />
                <MenuItem icon='envelope' text='email' />
              </Menu>
            }>
            <Button className='bp3-minimal' icon='cog' />
          </Popover2>
        </Navbar.Group>
      </Navbar>
      {/* <ul>
        <li className={styles.navitem}>
          <h2>David Bau</h2>
        </li>
        <hr />
        <li className={styles.navitem}>Projects</li>
        <li className={styles.navitem}>Media</li>
        <li className={styles.navitem}>About</li>
        <li className={styles.navitem}>Connect</li>
      </ul> */}
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
