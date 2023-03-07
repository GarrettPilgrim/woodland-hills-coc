import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../../lib/posts";
import PostLayout from "@/components/postLayout/postLayout";
import Image from "next/image";

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

const imageCheck = (image: any) => {
  if(image) {
    return (
      <Image
        src={image}
        alt=""
        fill
      />
    )
  }
  return "";
}

const audioCheck = (audio: any) => {
  if(audio) {
    return (
      <audio controls src={audio}></audio>
    )
  }
}

export default function Post(props: any) {
  let { postData } = props;
  console.log(postData.image)
  return (
    <Layout>
      <PostLayout>
        {imageCheck(postData.image)}
        <h1>
          {postData.title}
        </h1>
        {audioCheck(postData.audiofile)}
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}>
        </div>
      </PostLayout>
    </Layout>
  );
}