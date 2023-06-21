import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../utils/helpers'
import styles from '../styles/blog.module.css'

export default function Post({ post }) {
  const { titulo, contenido, imagen, url, publishedAt } = post
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`post ${titulo} `} width={600} height={400} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${url}`} className={styles.enlace}>Ver más</Link>
      </div>
    </article>
  )
}
