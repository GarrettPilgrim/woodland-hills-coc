import styles from "./postLayout.module.scss"

type Props = {
  children?: React.ReactNode,
}

export default function PostLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}