import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function Home({ posts, initialLocale }) {
  const router = useRouter()
  const [locale, setLocale] = useState(initialLocale)

  const handleChangeLocale = async e => {
    const newLocale = e.target.value
    Cookies.set('locale', newLocale);
    setLocale(newLocale)
    router.push(router.pathname, router.asPath.replace(`locale=${locale}`, `locale=${newLocale}`))
  }
  
  
  return (
    <div>
      <select value={locale} onChange={handleChangeLocale}>
        <option value="en">English</option>
        <option value="pt-BR">Português</option>
      </select>
      {posts.map(post => (
        <div key={post.attributes.id}>
          <h2>{post.attributes.title}</h2>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const initialLocale = context.req.headers.cookie?.split('; ')
    .find(row => row.startsWith('locale='))
    ?.split('=')[1] || 'en'
  const headers = { 'Accept-Language': initialLocale }

  try {
    const response = await axios.get(`http://localhost:1337/api/posts?locale=${initialLocale}`, { headers })
    const posts = response.data.data
    return { props: { posts, initialLocale } }
  } catch (error) {
    console.error(error)
    return { props: { posts: [], initialLocale } }
  }
}
