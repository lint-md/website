import '../styles/globals.css';
import type { AppProps } from 'next/app';
import './utils/register-editor-loader';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
