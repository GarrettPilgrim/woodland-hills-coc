import Layout from "@/components/layout";
import { attributes, react as SuccessContent } from "../../content/success.md";
import Cover from "@/components/cover/cover";

export default function Success() {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title}>
        <SuccessContent />
      </Cover>
    </Layout>
  );
}