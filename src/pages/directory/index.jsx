import { useState, useEffect } from "react";
import { withSessionSsr } from "@/utils/session";
import Layout from "@/components/layout";
import Cover from "@/components/cover/cover";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import MemberCard from "@/components/memberCard/memberCard";

export default function Directory() {
  const [members, setMembers] = useState([]);

  const fetchMember = async () => {
    await getDocs(collection(db, "members")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMembers(newData);
      console.log(members, newData);
    });
  };

  useEffect(() => {
    fetchMember();
  });

  return (
    <Layout>
      <Cover heading={"Directory"} />
      <div>
        {members?.map((member, i) => (
          <MemberCard key={i} LastName={member.Last_Name} />
        ))}
      </div>
    </Layout>
  );
}

// export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
//   const user = req.session.user;

//   if (user === undefined) {
//     res.setHeader("location", "/login");
//     res.statusCode = 302;
//     res.end();
//     return { props: {} };
//   }

//   // You can return data here from a database knowing only authenticated users (you) will see it.
//   return { props: { entriesData } };
// });

// https://dev.to/ndom91/adding-authentication-to-an-existing-serverless-next-js-app-in-no-time-with-nextauth-js-192h
// https://next-auth.js.org/tutorials
// Authenticate page with NextAuth and Google OAuth keys
