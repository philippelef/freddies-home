import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'


const FLink = ({ url, newTab, ...props }) => (
  <Link href={url} passHref>
    <a target={newTab === true ? "_blank" : "_self"} className={styles.FLinkText}>
      {props.children}
    </a>
  </Link>
)

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>FREDDIES</title>
        <meta name="freddies home" content="a place for everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Karla&family=Oswald&family=Poppins:wght@100&display=swap" rel="stylesheet" />
      </Head>


      <div className={styles.text_wrapper}>
        <div className={styles.freddiesTitle}>
          FREDDIES
        </div>
        <FLink url={"https://open.spotify.com/album/7uB2ykT1KK79AQqjWxTxnr?si=5NL4fA1PTTGdZAQK33EH0w"} newTab={true} >
          Stream SPACESTAR
        </ FLink>
        <FLink url={"https://youtu.be/c9updg3flic"} newTab={true} >
          Watch SPACESTAR
        </ FLink>
        <FLink url={"https://www.instagram.com/cryptensang_mafia/"} newTab={true} >
          @ cryptensang_mafia
        </ FLink>

      </div>


      <Footer />


    </div >
  )
}
