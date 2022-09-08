import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import CustomCursor from "../components/CustomCursor"
import Nav from '../components/Nav'
import HomeMain from '../components/HomeMain'
import Footer from "../components/Footer"

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
