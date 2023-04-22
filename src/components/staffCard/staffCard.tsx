import Image from "next/image";
import styles from "./staffCard.module.scss";

export default function StaffCard(props: any) {
  return (
    <div className={styles.container}>
      <Image 
        src={props.image}
        alt={props.alt}
        fill
      />
      <h3>{props.name}</h3>
      <span>{props.title}</span>
      <p>{props.description}</p>
    </div>
  )
}