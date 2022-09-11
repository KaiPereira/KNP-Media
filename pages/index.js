import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import CustomCursor from "../components/CustomCursor"
import Nav from '../components/Nav'
import HomeMain from '../components/HomeMain'
import Footer from "../components/Footer"
import Head from 'next/head'

export default function Home({ isFirstMount }) {
  const [cursorVariant, changeCursorVariant] = React.useState("default")
  const [cursorColor, changeCursorColor] = React.useState("blue")


  function cursorEnter() {
    changeCursorVariant("text")
  }
  function cursorEnterBlob(cursorColorParam) {
    changeCursorVariant("blob")
    changeCursorColor(cursorColorParam)
  }
  function cursorLeave() {
      changeCursorVariant("default")
  }


  return (
    <>
      <Head>
        <link rel="canonical" href="https://knp-media.vercel.app/" />
      </Head>
      <Nav 
        cursorEnter={cursorEnter}
        cursorLeave={cursorLeave}
        cursorEnterBlob={cursorEnterBlob}
      />
      <HomeMain 
        cursorEnter={cursorEnter}
        cursorLeave={cursorLeave}
        cursorEnterBlob={cursorEnterBlob}
      />
      <Footer 
        cursorEnter={cursorEnter}
        cursorLeave={cursorLeave}
      />
      <CustomCursor 
        cursorVariant={cursorVariant}
        cursorColor={cursorColor}
      />
    </>
  )
}
