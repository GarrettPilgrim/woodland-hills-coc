import styles from "./update.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  attributes,
  react as UpdateText,
} from "@content/components/update.md";

export default function Update() {
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
        <UpdateText />
        {DisplayButton(button, buttonurl)}
      </div>
    </div>
  );
}
