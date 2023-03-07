import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../../lib/posts";
import PostLayout from "@/components/postLayout/postLayout";

export async function getStaticProps({ params }: any) {
  const postData = await getProductData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}


export default function Post(props: any) {
  let { postData } = props;
  return (
    <Layout>
      <PostLayout>
        <h1>
          {postData.title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}>
        </div>
      </PostLayout>
    </Layout>
  );
}