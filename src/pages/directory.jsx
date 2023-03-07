import Layout from "@/components/layout";
import Cover from "@/components/cover/cover";

export default function Directory() {
  const { user } = "hello";

  if (!user || user.isLoggedIn === false) {
    return <Layout>Loading...</Layout>;
  }
  return (
    <Layout>
      <Cover heading={"Directory"} />
    </Layout>
  );
}

// https://dev.to/ndom91/adding-authentication-to-an-existing-serverless-next-js-app-in-no-time-with-nextauth-js-192h
// https://next-auth.js.org/tutorials
// Authenticate page with NextAuth and Google OAuth keys
