import Layout from "@/components/layout";
import { attributes, react as HomeContent } from "../../content/contact.md";
import Cover from "@/components/cover/cover";
import ContactForm from "@/components/contactForm/contactForm";

export default function Contact() {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title} />
      <HomeContent />
      <ContactForm />
    </Layout>
  );
}
