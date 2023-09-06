import axios from 'axios'

export default async function handler(req, res) {
  const { locale } = req.query
  const response = await axios.get(`http://localhost:1337/api/posts?locale=${locale}`)
  const posts = response.data.data
  res.status(200).json(posts);
}
