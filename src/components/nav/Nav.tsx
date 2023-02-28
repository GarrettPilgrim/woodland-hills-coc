import Link from "next/link"
import styles from "./nav.module.scss";

export default function Nav() {
  return(
    <div className={styles.container}>
      <nav>
        <Link href="/" className={styles.logo}>
          WHCHURCH
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};