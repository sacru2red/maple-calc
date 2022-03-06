import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>메이플 계산기</title>
        <meta name="description" content="메이플 계산기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>메이플 계산기</h1>

        <div className={styles.grid}>
          <Link href={"/item"}>
          <a className={styles.card}>
            <h2>아이템 계산기 &rarr;</h2>
            <p>아이템 스펙으로 작 계산하기</p>
          </a>
          </Link>

          <Link href={"/404"}>
          <a className={styles.card}>
            <h2>없는 페이지 &rarr;</h2>
          </a>
          </Link>
          
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
