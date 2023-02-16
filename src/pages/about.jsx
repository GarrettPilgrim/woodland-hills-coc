import Layout from "@/components/layout";
import { attributes, react as AboutContent } from "../../content/about.md";

export default function About() {
  let { title } = attributes;
  return (
    <Layout>
      <h1>{title}</h1>
      <AboutContent />
    </Layout>
  );
}
