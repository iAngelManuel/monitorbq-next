import { useState } from 'react'
import Layout from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/guitarras.module.css'

export default function Producto({ guitarra, agregarCarrito }) {
  const [ cantidad, setCantidad ] = useState(0)
  const { nombre, descripcion, imagen, precio }= guitarra[0].attributes
  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad === 0) {
      return alert('Cantidad no válida')
    }
    const data = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    }
    agregarCarrito(data)
  }
  return (
    <Layout
      title={`Guitarras | ${nombre}`}
      description={"Blog de música, venta de guitarras y mas..."}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400}/>
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form
            onSubmit={handleSubmit}
            className={styles.formulario}
          >
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              onChange={e => setCantidad(Number(e.target.value))}
            >
              <option value="0">Seleccione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/guitarras`
  const response = await fetch(url)
  const { data } = await response.json()
  const paths = data.map(guitarra => ({
    params: { url: guitarra.attributes.url }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { url: guitarraUrl } }) {
  const url = `${process.env.API_URL}/guitarras?filters[url]=${guitarraUrl}&populate=imagen`
  const response = await fetch(url)
  const { data: guitarra } = await response.json()
  return { props: { guitarra } }
}

// export async function getServerSideProps({ query: { url: guitarraUrl } }) {
//   const url = `${process.env.API_URL}/guitarras?filters[url]=${guitarraUrl}&populate=imagen`
//   const response = await fetch(url)
//   const { data: guitarra } = await response.json()
//   return {
//     props: { guitarra }
//   }
// }
