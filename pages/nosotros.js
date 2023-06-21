import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Blog de música, venta de guitarras, sobre nosotros y mas..."}
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" alt="Nosotros" width={600} height={400} />
            <div>
              <p>Etiam id orci malesuada, convallis neque ac, posuere massa. Cras feugiat, sapien a congue dictum, enim velit fringilla dolor, ac tempus tellus dui nec tellus. Etiam malesuada nulla eu turpis dignissim consequat. Suspendisse semper sapien lorem, id ullamcorper urna posuere et. Pellentesque eleifend gravida orci, sed pulvinar turpis porta at. Morbi tortor tortor, tristique a sapien et, rutrum efficitur elit. Proin sodales ac purus sit amet consequat.</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
