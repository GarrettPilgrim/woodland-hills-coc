import Link from "next/link"
import Hamburger from "../hamburger/hamburger";
import styles from "./nav.module.scss";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return(
    <div className={styles.container}>
      <nav>
        <Link href="/" className={styles.logo}>
          WHCHURCH
        </Link>
          <div className={styles.hamburger} onClick={handleClick}>
            <Hamburger isOpen={isOpen} onClick={handleClick} />
          </div>
          <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
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