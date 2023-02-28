import styles from "@/components/cover/cover.module.scss";

export default function Cover(props: any) {
  
  return(
    <header className={styles.container}>
      <h1>{props.heading}</h1>
    </header>
  )
}