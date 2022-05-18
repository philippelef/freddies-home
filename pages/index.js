import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const FLink = ({ url, newTab, ...props }) => {
  console.log(url)
  return (
    <Link href={url} passHref>
      <a target={newTab === true ? "_blank" : "_self"} className={styles.FLinkText}>
        {props.children}
      </a>
    </Link>
  )
}

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>the freddies</title>
        <meta name="freddies redirector" content="a place for everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.text_wrapper}>
        <div className={styles.freddiesTitle}>
          FREDDIES
        </div>
        <FLink url={"https://open.spotify.com/album/7uB2ykT1KK79AQqjWxTxnr?si=5NL4fA1PTTGdZAQK33EH0w"} newTab={true} >
          STREAM
        </ FLink>
        <FLink url={"https://www.youtube.com/channel/UC6OibzTCTjttrJ2FeQBGa8A"} newTab={true} >
          YOUTUBE
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




    </div>
  )
}
