import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Image from 'next/image'
import React, { useState } from 'react';


const FLink = ({ url, newTab, hover, setHover, hoverId, ...props }) => {
  var styleChange = { color: "red" }

  const [canChange, setCanChange] = useState(true)


  return (
    <Link href={url} passHref>
      <a target={newTab === true ? "_blank" : "_self"} className={styles.FLinkText}
        aria-label={url}
        onMouseEnter={() => {
          if (canChange) {
            setHover(hoverId)
          }
        }}
        onTransitionEnd={() => { setHover(0); setCanChange(true) }}
      >
        {props.children}
      </a>
    </Link>
  )
}

export default function Home() {
  const [hover, setHover] = useState(0)
  const background_array = ["/background0.png", "/backgroundSpacestar.png", "/background0.png", "/background1.png"]

  return (
    <div className={styles.app}>
      {/* <div className={`${styles.backgroundHidden} ${hover === 0 ? '' : styles.backgroundShown}`}>
        <Image
          src={background_array[hover]}
          layout="fill"
          objectFit="cover"
        >
        </Image>
      </div> */}

      <div className={styles.InfoStorage}>
        <Head>
          <title>FREDDIES</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="Freddies Home" content="A Place For Everyone" />
          <meta name="description" content="Handful of links to redirect to Freddies work" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="  msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link href="https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Indie+Flower&family=Karla&family=My+Soul&family=Oswald&family=Poppins:wght@100&display=swap" />
          {/* <html lang="fr"></html> */}
        </Head>



        <div className={styles.text_wrapper}>
          <div className={styles.freddiesTitle}>
            <img
              src="/freddiesLogo.png"
            />

          </div>
          <FLink url={"https://open.spotify.com/album/7uB2ykT1KK79AQqjWxTxnr?si=5NL4fA1PTTGdZAQK33EH0w"} newTab={true}
            hover={hover}
            setHover={setHover}
            hoverId={1}
          >
            Stream SPACESTAR
          </ FLink>
          <FLink url={"https://youtu.be/c9updg3flic"} newTab={true}
            hover={hover}
            setHover={setHover}
            hoverId={2}
          >
            Watch SPACESTAR
          </ FLink>
          <FLink url={"https://cryptensang.freddies.fr"} newTab={false}
            hover={hover}
            setHover={setHover}
            hoverId={3}>
            Cryptensang World
          </ FLink>
        </div>


        <Footer />


      </div >
    </div>
  )
}
