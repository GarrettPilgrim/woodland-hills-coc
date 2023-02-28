import Layout from "@/components/layout";
import { attributes, react as Content } from "../../content/posts.md";
import Cover from "@/components/cover/cover"
import PostFeed from "@/components/postFeed/postFeed"

export default function Posts() {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title} />
      <Content />
      <PostFeed />
    </Layout>
  );
}
