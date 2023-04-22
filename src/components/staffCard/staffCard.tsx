import Image from "next/image";
import styles from "./staffCard.module.scss";

export default function StaffCard(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image 
          src={props.image}
          alt={props.alt}
          fill
        />
      </div>
      <div className={styles.text}>
        <h2>
          {props.name}
          <br/>
          <span>{props.title}</span>
        </h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}