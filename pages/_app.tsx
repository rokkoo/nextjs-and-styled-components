import { AppProps } from 'next/app';

import PageLayout from 'layout/PageLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <PageLayout>
         <p>global </p>
         <Component {...pageProps} />
      </PageLayout>
   );
};

export default MyApp;
