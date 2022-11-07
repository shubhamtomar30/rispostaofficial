import '../styles/globals.css';
import Layout from '../component/layouts/layout';
import Head from 'next/head';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

function MyApp({ Component, pageProps }) {
     return (
          <>
               <Head>
                    <meta name='viewport' content='width=device-width , initial-scale=1  , maximum-scale=1000.0' />
                    
               </Head>
               <GoogleAnalytics measurementId='G-KJCMLEPJXW' />
               <Layout>
                    <Component {...pageProps} />
               </Layout>
          </>
     );
}

export default MyApp;
