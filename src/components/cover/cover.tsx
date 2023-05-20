import styles from "@/components/cover/cover.module.scss";

export default function Cover(props: any) {
  const {children} = props;
  return(
    <header className={styles.container}>
      <h1>{props.heading}</h1>
      <div>{children}</div>
    </header>
  )
}