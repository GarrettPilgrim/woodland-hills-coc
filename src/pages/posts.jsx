import Layout from "@/components/layout";
import { attributes, react as Content } from "../../content/posts.md";
import Cover from "@/components/cover/cover";
import PostFeed from "@/components/postFeed/postFeed";
import { getSortedProducts } from "../../lib/posts";

export async function getStaticProps() {
  const allProducts = getSortedProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export default function Posts({ allProducts }) {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title} />
      <PostFeed props={allProducts} />
      <Content />
    </Layout>
  );
}
