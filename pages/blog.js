import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'

export default function Blog({ posts }) {
  return (
    <>
      <Layout
        title={"Blog"}
        description={"Blog de música, venta de guitarras y mas..."}
      >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/posts?populate=imagen`
  const response = await fetch(url)
  const { data: posts } = await response.json()
  return {
    props: { posts }
  }
}
