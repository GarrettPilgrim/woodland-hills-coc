import { withSessionSsr } from "@/utils/session";
import Layout from "@/components/layout";
import Cover from "@/components/cover/cover";

export default function Directory() {
  // const { user } = "hello";

  // if (!user || user.isLoggedIn === false) {
  //   return <Layout>Loading...</Layout>;
  // }
  return (
    <Layout>
      <Cover heading={"Directory"} />
    </Layout>
  );
}

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  // You can return data here from a database knowing only authenticated users (you) will see it.
  return { props: {} };
});

// https://dev.to/ndom91/adding-authentication-to-an-existing-serverless-next-js-app-in-no-time-with-nextauth-js-192h
// https://next-auth.js.org/tutorials
// Authenticate page with NextAuth and Google OAuth keys
