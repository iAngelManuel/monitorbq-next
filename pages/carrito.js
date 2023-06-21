import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/carrito.module.css'

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
  const [ total, setTotal ] = useState(0)
  useEffect(() => {
    const calculoTotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    setTotal(calculoTotal)
  }, [carrito])
  return (
    <Layout
      title="Carrito de compras"
      description="Carrito de compra de guitarras y mas..."
    >
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0 ? "Carrito vacio" : (
              carrito.map(item => (
                <div key={item.id} className={styles.producto}>
                  <div>
                    <Image src={item.imagen} alt={`Producto ${item.nombre}`} width={250} height={480} />
                  </div>
                  <div>
                    <p className={styles.nombre}>{item.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                       className={styles.select}
                       value={item.cantidad}
                       onChange={ e => actualizarCantidad({ id: item.id, cantidad: Number(e.target.value)}) }
                      >
                        <option value="0">Seleccione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.precio}>$<span>{item.precio}</span></p>
                    <p className={styles.subtotal}>$<span>{item.cantidad * item.precio}</span></p>
                  </div>
                  <button
                    type="button"
                    onClick={() => eliminarProducto(item.id)}
                    className={styles.eliminar}
                  >X</button>
                </div>
              ))
            )}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
