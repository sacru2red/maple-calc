import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Item.module.css'
import { classes, getClassRoyal } from '../../constants'

export default function Item (_props) {
  const [kind, setKind] = React.useState('모자')
  const [classKind, setClassKind] = React.useState(classes[0].ko)

  const onChangeKind = ({
    target: { value }
  }) => {
    // 현재 모자만 선택가능
    if (value === '모자') {
      setKind(value)
    }
  }

  const onChangeClassKind = ({
    target: { value }
  }) => {
    setClassKind(value)
  }

  const getImageSource = kind => kind === '상의' ? 'Eagle_Eye_Warrior.png' : kind === '하의' ? 'Trixter_Warrior.png' : 'Royal_Warrior.png'

  const royal = getClassRoyal(classKind)
  const royalStat = royal.getStat()

  return (
    <div>
      <Head>
        <title>아이템 작 계산기</title>
        <meta name="description" content="메이플 아이템 계산기" />
      </Head>

      <main className={styles.main}>
        <h1>아이템 계산기</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h3 style={{ marginRight: 10 }}>종류 :</h3>
          <select style={{ height: 25 }} onChange={onChangeKind} value={kind || ''}>
            <option>상의</option>
            <option>하의</option>
            <option>모자</option>
          </select>
          <Image src={`/images/${getImageSource(kind)}`} width={20} height={20} alt="itemIcon" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h3 style={{ marginRight: 10 }}>직업 :</h3>
          <select style={{ height: 25 }} onChange={onChangeClassKind} value={classKind || ''}>
            {classes.map(c => (
              <option key={c.en} value={c.ko}>{c.ko}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>스탯 :</h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {Object.entries(royalStat).map(([stat, value]) => (
              <React.Fragment key={stat}>
                <div>{stat}</div>
                <div>{value}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>

    </div>
  )
}

export async function getStaticProps (_context) {
  return {
    props: { message: 'Next.js is awesome' } // will be passed to the page component as props
  }
}
