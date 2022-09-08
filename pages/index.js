import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
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

  const animationConfiguration = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
  };


  return (
    <motion.div variants={!isFirstMount && animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.75 }} className="opacityPageTransition">
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
    </motion.div>
  )
}
