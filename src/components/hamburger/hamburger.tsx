import styles from "@/components/hamburger/hamburger.module.scss";

export default function Hamburger() {
  return(
    <button className={styles.container}>
      <svg viewBox="0 0 100 100" width="25" height="25">
        <rect y="20" width="100" height="12"></rect>
        <rect y="50" width="100" height="12"></rect>
        <rect y="80" width="100" height="12"></rect>
      </svg>
    </button>
  );
}