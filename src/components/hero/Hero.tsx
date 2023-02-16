import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero(props: any) {
  return(
    <header className={styles.container}>
      <Image 
        src={props.image}
        alt=""
        height={1216}
        width={1830}
      />
      <div className={styles.text}>
        <h1>
          {props.title}
        </h1>
        <p>
          {props.subheading}
        </p>
        <button>Learn More</button>
      </div>
    </header>
  )
};