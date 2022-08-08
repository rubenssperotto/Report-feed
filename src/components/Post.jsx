import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/rubenssperotto.png" />
          <div className={styles.authorInfo}>
            <strong>Rubens Sperotto</strong>
            <span> Web Developer</span>
          </div>
        </div>

        <time title="12 de Julho às 16:22h" dateTime="2022/07/12 16:22:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no treinamento, evento da EVP. O nome do projeto é Report feed 🚀{" "}
        </p>
        <p>
          👉<a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#EVP </a>{" "}
          <a href=""> #reportfeed</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
