import styles from "./footer.module.scss";

export default function Footer() {
  return(
    <footer className={styles.container}>
      <div>
        <p>You are invited to come study the Bible and worship with us. You are always welcome!</p>
      </div>
      <address>
        <a href="https://goo.gl/maps/HMUgijfuxKkKwita9"
          target="_blank"
          rel="noreferrer noopener"
        >
          10011 Woodland Hills Drive
          Cordova, TN 38018
        </a>
        <a href="mailto:info@woodlandhillschurch.com">info@woodlandhillschurch.com</a>
        <a href="tel:+19017557709">901-755-7709</a>
      </address>
    </footer>
  )
};