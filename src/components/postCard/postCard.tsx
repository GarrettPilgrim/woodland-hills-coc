import Image from "next/image";
import styles from "./postCard.module.scss"

export default function postCard(props: any) {
  let placeImage = (image: string, alt: string) => {
    if (image && alt) {
      return <Image src={image} alt={alt} fill/>
    }
  }
  return (
    <div className={styles.container}>
      {placeImage()}
      <h2></h2>
    </div>
  );
}