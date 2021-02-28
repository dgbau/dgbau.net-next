import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import {
  MailOutlined,
  HomeOutlined,
  SettingOutlined,
  DotChartOutlined,
  MediumOutlined,
  ExperimentOutlined,
  GithubOutlined,
} from '@ant-design/icons';

import css from './Nav.module.scss';

const { SubMenu } = Menu;
const handleClick = (e, setCurrent) => {
  console.log('click', e.key);
  setCurrent(e.key);
};

export default function Nav(props: any) {
  const [current, setCurrent] = useState('home');
  return (
    <Menu onClick={(e) => handleClick(e, setCurrent)} selectedKeys={[current]} mode='horizontal'>
      {/* <h3>DG bau</h3> */}
      <Menu.Item key='home'>
        {' '}
        <Link href='/'>
          <a>DG Bau</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='viz' icon={<DotChartOutlined />}>
        <Link href='/viz'>
          <a>{null}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='research' icon={<ExperimentOutlined />}>
        <Link href='/research'>
          <a>{null}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='contact' icon={<MailOutlined />}>
        <Link href='/contact'>
          <a>{null}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='medium' icon={<MediumOutlined />}>
        <a href='https://medium.com' target='_blank' rel='noopener noreferrer'></a>
      </Menu.Item>
      <Menu.Item key='github' icon={<GithubOutlined />}>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'></a>
      </Menu.Item>
      <Menu.Item key='settings' icon={<SettingOutlined />}></Menu.Item>
      {/* <SubMenu key='settings' icon={<SettingOutlined />}>
        <Menu.ItemGroup title='Theme'>
          <Menu.Item key='light-theme'>Light</Menu.Item>
          <Menu.Item key='dark-theme'>Dark</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title='Language'>
          <Menu.Item key='lang-en'>English</Menu.Item>
          <Menu.Item key='lang-scram'>Scrambled</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
    </Menu>
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
