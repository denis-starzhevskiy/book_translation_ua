import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import MainLayout from '@/components/layouts/MainLayout';
import Meta from '@/components/meta';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
