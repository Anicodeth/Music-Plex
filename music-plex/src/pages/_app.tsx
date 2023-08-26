import type { AppProps } from 'next/app'
import '../styles/global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

library.add(faMusic, faPlay, faPause);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}