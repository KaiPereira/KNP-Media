import '../styles/globals.scss'
import Head from 'next/head'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KNP Media | Google Ads Agency</title>
        <meta name="description" content="KNP Media is your one stop agency for Google Ads. We partner with our clients to make the most effective ads targeted towards your audience and goals!" />
        <meta name="keyword" content="Google Ads, Google Ads Agency, Google, Agency, Marketing, Marketing Agency, Consulting, Google Ads Freelance, Ads, Ad Services, Google Ad Management, Google Ads Company, Promotion, Google Ads Consulting, Digital Marketing, Online Marketing, Digital Services, Online Services" />
        <meta name="author" content="Kai Pereira" />
        <link rel="icon" href="/KNP Media 2.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
