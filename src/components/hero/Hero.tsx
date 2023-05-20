import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero(props: any) {
  return(
    <header className={styles.container}>
      <Image 
        src={props.image}
        alt=""
        fill
      />
      <div className={styles.text}>
        <h1>
          {props.heading}
        </h1>
        <p>
          {props.subheading}
        </p>
        <a href={props.link}>Learn More</a>
      </div>
    </header>
  )
};