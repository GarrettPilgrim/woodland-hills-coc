import Cover from "@/components/cover/cover";
import Layout from "@/components/layout";
import StaffCard from "@/components/staffCard/staffCard";
import { attributes, react as AboutContent } from "../../content/about.md";
import { getSortedStaff } from "../../lib/staff";

export async function getStaticProps() {
  const allStaff = getSortedStaff();
  return {
    props: {
      allStaff,
    },
  };
}

export default function About({ allStaff }) {
  let { title } = attributes;
  return (
    <Layout>
      <Cover heading={title} />
      <AboutContent className="main-content" />
      {allStaff.map(({ id, name, title, email, phone, text, image, alt }) => (
        <StaffCard
          key={id}
          name={name}
          title={title}
          email={email}
          phone={phone}
          text={text}
          image={image}
          alt={alt}
        />
      ))}
    </Layout>
  );
}
