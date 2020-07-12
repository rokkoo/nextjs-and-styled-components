import { AppProps } from 'next/app';

import PageLayout from 'layout/PageLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <PageLayout>
         <Component {...pageProps} />
      </PageLayout>
   );
};

export default MyApp;
