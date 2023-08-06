import styles from "./announcement.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  attributes,
  react as AnnouncementText,
} from "@content/components/announcement.md";

export default function Annoucement() {
  let { title, subheading, image, alt, button, buttonurl } = attributes;

  let DisplayButton = (button, buttonurl) => {
    if (button && buttonurl) {
      return <Link href={buttonurl}>{button}</Link>;
    }
  };

  let DisplayImage = (image, alt) => {
    if (image && alt) {
      return (
        <div className={styles.image}>
          <Image src={image} alt={alt} fill />
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {DisplayImage(image, alt)}
        <h2>
          {title}
          <br />
          <span>{subheading}</span>
        </h2>
        <AnnouncementText />
        {DisplayButton(button, buttonurl)}
      </div>
    </div>
  );
}
