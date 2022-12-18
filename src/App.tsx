import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostProps } from './components/Post'

import './global.css'
import styles from './App.module.css'

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AleMFS.png',
      name: 'Alexandre Matheus',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'https://github.com/AleMFS' },
    ],
    publishedAt: new Date('2022-12-16 18:21:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/SathosK.png',
      name: 'Tiago Pereira',
      role: 'Desenvolvedor Backend'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir um Projeto próprio, deem uma olhada no meu Github ' },
      { type: 'link', content: 'https://github.com/Sathosk' },
    ],
    publishedAt: new Date('2022-12-16 17:21:00')
  }
]

function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>

  )
}

export default App
