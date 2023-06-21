import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

export default function Header() {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <div className="logo">
          <Link href="/">
            <Image src="img/logo.svg" alt="Logotipo" width={300} height={40} />
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/" className={router.pathname === '/' ? styles.active : ''}>Inicio</Link>
            <Link href="/nosotros" className={router.pathname === '/nosotros' ? styles.active : ''}>Nosotros</Link>
            <Link href="/tienda" className={router.pathname === '/tienda' ? styles.active : ''}>Tienda</Link>
            <Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>Blog</Link>
            <Link href="/carrito">
              <Image src="/img/carrito.png" alt="Imagen carrito" width={30} height={25}></Image>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
