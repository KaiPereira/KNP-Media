import '../styles/globals.scss'
import Head from 'next/head'
import React from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="Google Ad URL" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-601BSX2ENR`} />
      <Script id="Google Ad Script" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-601BSX2ENR', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Head>
        <title>KNP Media | Google Ads Agency</title>
        <meta name="description" content="KNP Media is your one stop agency for Google Ads. We partner with our clients to make the most effective ads targeted towards your audience and goals!" />
        <meta name="keyword" content="Google Ads, Google Ads Agency, Google, Agency, Marketing, Marketing Agency, Consulting, Google Ads Freelance, Ads, Ad Services, Google Ad Management, Google Ads Company, Promotion, Google Ads Consulting, Digital Marketing, Online Marketing, Digital Services, Online Services" />
        <meta name="author" content="Kai Pereira" />
        <link rel="icon" href="/KNP Media 2.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="google-site-verification" content="hxY2eRF7uny8z4kLsNrZX16kBqA_stdkm2qs0HRucQk" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
