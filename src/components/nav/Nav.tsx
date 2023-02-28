import Link from "next/link"
import Hamburger from "../hamburger/hamburger";
import styles from "./nav.module.scss";

let openBurger = () => {
  addEventListener()
}

export default function Nav() {
  return(
    <div className={styles.container}>
      <nav>
        <Link href="/" className={styles.logo}>
          WHCHURCH
        </Link>
          <div className={styles.hamburger}>
            <Hamburger />
          </div>
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