import Image from "next/image";
import styles from "./postCard.module.scss"

export default function PostCard(props: any) {
  let placeImage = (image: string, alt: string) => {
    if (image && alt) {
      return <Image src={image} alt={alt} fill/>
    }
  }

  let { title } = props;
  return (
    <div className={styles.container}>
      {/* {placeImage()} */}
      <h2>{title}</h2>
    </div>
  );
}