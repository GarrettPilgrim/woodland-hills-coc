import Layout from "@/components/layout";
import { attributes, react as HomeContent } from "../../content/sermons.md";

export default function Sermons() {
  let { title } = attributes;
  return (
    <Layout>
      <h1>{title}</h1>
      <HomeContent />
    </Layout>
  );
}
