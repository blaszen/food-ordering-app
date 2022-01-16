import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in San Diego</title>
        <meta name="description" content="Pizza baby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage

      <Image src="/img/1.png" alt="" width={150} height= {150}/>
    </div>
  )
}
