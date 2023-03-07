import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../../lib/posts";
import PostLayout from "@/components/postLayout/postLayout";
import Image from "next/image";
import styles from "@/styles/posts.module.scss"

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
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt=""
          fill
        />
      </div>
    )
  }
  return "";
}

const audioCheck = (audio: any) => {
  if(audio) {
    return (
      <figure>
        <audio controls src={audio}></audio>
      </figure>
    )
  }
}

export default function Post(props: any) {
  let { postData } = props;
  console.log(postData.image)
  return (
    <Layout>
      <div className={styles.container}>
        {imageCheck(postData.image)}
        <div className={styles.textContainer}>
          <h1>
            {postData.title}
          </h1>
          {audioCheck(postData.audiofile)}
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} className={styles.content}>
          </div>
        </div>
      </div>
    </Layout>
  );
}