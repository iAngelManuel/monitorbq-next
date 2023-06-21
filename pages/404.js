import Layout from '../components/layout'
import Link from 'next/link'

export default function Pagina404() {
  return (
    <Layout
      title="404 | Página no encontrada"
    >
      <p className="error">Página no encontrada</p>
      <Link href="/" className="error-enlace">Ir a inicio</Link>
    </Layout>
  )
}
