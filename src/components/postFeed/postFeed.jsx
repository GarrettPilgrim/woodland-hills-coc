import styles from "./postFeed.module.scss";
import PostCard from "../postCard/postCard";

export default function ProductGrid({ props }) {
  return (
    <div class={styles.productgrid}>
      <section id="products">
        {props.map(({ id, image, title, alt, description }) => (
          <PostCard
            key={id}
            title={title}
            image={image}
            alt={alt}
            id={id}
            description={description}
          />
        ))}
      </section>
    </div>
  );
}
