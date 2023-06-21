import Layout from '../../components/layout'
import Image from 'next/image'
import { formatearFecha } from '../../utils/helpers'
import styles from '../../styles/blog.module.css'

export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes
  return (
    <Layout
      title={`Blog | ${titulo}`}
      description={"Blog de música, venta de guitarras y mas..."}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagen.data.attributes.url} alt={`post ${titulo}`} width={1000} height={400} />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ query: { url } }) {
  const link = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  const response = await fetch(link)
  const { data: post } = await response.json()
  return {
    props: { post }
  }
}