import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Item.module.css'

export default function Item(props) {

  const onChangeKind = ({
    target: {value}
  }) => {
    // window.location.replace('/item/' + value)
  }

  const getImageSource = kind => kind === '상의' ? 'Eagle_Eye_Warrior.png' : kind === '하의' ? 'Trixter_Warrior.png' : 'Royal_Warrior.png'

  return (
    <div>
      <Head>
        <title>아이템 계산기</title>
        <meta name="description" content="메이플 아이템 계산기" />
      </Head>

      <main className={styles.main}>
        <h1>아이템 계산기</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h3 style={{marginRight: 10}}>종류</h3>
        <select style={{height: 25}} onChange={onChangeKind} defaultValue="상의">
            <option>상의</option>
            <option>하의</option>
            <option>모자</option>
        </select>
        <Image src={`/images/${getImageSource('상의')}`} width={20} height={20} alt="itemIcon" />
        </div>
      </main>

    </div>
  )
}

export async function getStaticProps(context) {
  console.log('context', context)
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  }
}