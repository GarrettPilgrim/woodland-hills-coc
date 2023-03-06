import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.scss"

export default function PostCard(props: any) {
  let { image, alt, title, id, description, date } = props;
    let placeImage = (image: string, alt: string) => {
      if (image && alt) {
        return <Image src={image} alt={alt} fill/>
      }
    }
  return (
    <Link href={`posts/${id}`} className={styles.container}>
      {placeImage(image, alt)}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
}

// export default function PostCard(props: any) {
//   let placeImage = (image: string, alt: string) => {
//     if (image && alt) {
//       return <Image src={image} alt={alt} fill/>
//     }
//   }

//   let { title, image, alt, date, audio } = props;
//   return (
//     <div className={styles.container}>
//       {/* {placeImage()} */}
//       <h2>{title}</h2>
//     </div>
//   );
// }