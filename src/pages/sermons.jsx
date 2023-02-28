import Layout from "@/components/layout";
import { attributes, react as SermonContent } from "../../content/sermons.md";
import Cover from "@/components/cover/cover"
import PostFeed from "@/components/postFeed/postFeed"

export default function Sermons() {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title} />
      <SermonContent />
      <PostFeed />
    </Layout>
  );
}
