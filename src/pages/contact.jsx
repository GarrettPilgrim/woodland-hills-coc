import Layout from "@/components/layout";
import { attributes, react as HomeContent } from "../../content/contact.md";

export default function Contact() {
  let { title } = attributes;
  return (
    <Layout>
      <h1>{title}</h1>
      <HomeContent />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.134651108401!2d-89.73150218407818!3d35.15326248032069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f9f19e3ed0a4b%3A0x4c7c2f7f3bd6eb23!2sWoodland%20Hills%20Chuch%20of%20Christ!5e0!3m2!1sen!2sus!4v1674850971348!5m2!1sen!2sus"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Layout>
  );
}
