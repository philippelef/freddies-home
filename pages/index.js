import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import FreddiesSVG from '../components/FreddiesSvg'
import Footer from '../components/Footer'


const FLink = ({ url, newTab, ...props }) => {
  console.log(url)
  return (
    <Link href={url} passHref>
      <a target={newTab === true ? "_blank" : "_self"} className={styles.FLinkText}>
        <div className={styles.hoverDash} />
        {props.children}
        <div className={styles.hoverDash} />
      </a>
    </Link>
  )
}

export default function Home() {

  return (
    <div className={styles.app}>
      <Head>
        <title>FREDDIES</title>
        <meta name="freddies home" content="a place for everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@100&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.text_wrapper}>
        <div className={styles.freddiesTitle}>
          <FreddiesSVG className={styles.svgAnim} />
          FREDDIES
          <FreddiesSVG className={styles.svgAnim} />
        </div>
        <FLink url={"https://open.spotify.com/album/7uB2ykT1KK79AQqjWxTxnr?si=5NL4fA1PTTGdZAQK33EH0w"} newTab={true} >
          Stream SPACESTAR
        </ FLink>
        <FLink url={"https://youtu.be/c9updg3flic"} newTab={true} >
          Watch SPACESTAR
        </ FLink>




      </div>
      {/* 
      <div className={styles.image_wrapper}>
        <Image
          src="/background.png"
          layout='fill'
          objectFit='cover'
        >
        </Image>
      </div> */}


      <Footer />

    </div >
  )
}
