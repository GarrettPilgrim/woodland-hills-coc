import styles from "./footer.module.scss";

export default function Footer() {
  return(
    <footer className={styles.container}>
      <div>
        <h3>Service Times</h3>
        <ul>
          <li>Sunday Fellowship and Prayer: 9 AM</li>
          <li>Sunday Bible Class: 9:30 AM</li>
          <li>Sunday Worship: 10:30 AM</li>
          <li>Wednesday Bible Class: 7 PM</li>
        </ul>
        <p>*No PM Worship on 3rd Sundays</p>
        <p>You are invited to come study the Bible and worship with us. You are always welcome!</p>
      </div>
      <div>
        <h3>Location</h3>
        <address>
          <a href="https://goo.gl/maps/HMUgijfuxKkKwita9"
            target="_blank"
            rel="noreferrer noopener"
          >
            10011 Woodland Hills Drive
            <br/>Cordova, TN 38018
          </a>
          <a href="mailto:info@woodlandhillschurch.com">info@woodlandhillschurch.com</a>
          <a href="tel:+19017557709">901-755-7709</a>
        </address>
      </div>
    </footer>
  )
};