import styles from "./postFeed.module.scss";
import PostCard from "../postCard/postCard";

export default function PostFeed({ props }) {
  return (
    <div className={styles.container}>
      <section id="posts">
        {props.map(({ id, image, title, alt, description, date }) => (
          <PostCard
            key={id}
            title={title}
            image={image}
            alt={alt}
            id={id}
            date={date}
            description={description}
            className={styles.postCard}
          />
        ))}
      </section>
    </div>
  );
}
