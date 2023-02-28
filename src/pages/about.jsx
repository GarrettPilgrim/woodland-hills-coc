import Cover from "@/components/cover/cover";
import Layout from "@/components/layout";
import { attributes, react as AboutContent } from "../../content/about.md";

export default function About() {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title} />
      <AboutContent />
    </Layout>
  );
}
