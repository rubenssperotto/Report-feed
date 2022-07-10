import styles from './Header.module.css'

import postLogo from '../assets/logo-reportfeed.svg';

export function Header() {
    return (
      <header className={styles.header}>
        <img src={postLogo} alt="Logo do Report feed" />
        <strong>Report feed</strong>
      </header>
    )
  }