import styles from "./announcement.module.scss"
import Image from "next/image"
import { attributes, react as AnnouncementText } from "@content/components/announcement.md";

export default function Annoucement() {
  let { heading, subheading, backgroundimage, backgroundalt, coverimage, coveralt } = attributes;
  return(
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.image}>
            <Image
              src={backgroundimage}
              alt={backgroundalt}
              fill
            />
          </div>
          <h2>{heading}
          <br />
          <span>{subheading}</span>
          </h2>
          <AnnouncementText />
        </div>
      </div>
  )
}