import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({ guitarras }) {
  return (
    <>
      <Layout
        title={"Tienda Virtual"}
        description={"Blog de música, venta de guitarras y mas..."}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?populate=imagen`
  const response = await fetch(url)
  const { data: guitarras } = await response.json()
  return {
    props: { guitarras }
  }
}

// export async function getStaticProps() {
//   const url = `${process.env.API_URL}/guitarras?populate=imagen`
//   const response = await fetch(url)
//   const { data: guitarras } = await response.json()
//   return {
//     props: { guitarras }
//   }
// }