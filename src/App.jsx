import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rubenssperotto.png',
      name: 'Rubens Sperotto',
      role: 'CEO',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 ',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no treinamento, evento da EVP. O nome do projeto é Report feed 🚀'},
      {type: 'link', content: 'jane.design/doctorcare👉'},       
    ],
    publishedAt: new Date('2022-08-08 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rubenssperotto.png',
      name: 'Lucas Silva',
      role: 'Educator',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 ',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no treinamento, evento da EVP. O nome do projeto é Report feed 🚀'},
      {type: 'link', content: 'jane.design/doctorcare👉'},       
    ],
    publishedAt: new Date('2022-08-07 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
