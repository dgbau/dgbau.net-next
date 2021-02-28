import App from 'next/app';

import '../styles/globals.scss';
import '../styles/antd-custom.less';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
