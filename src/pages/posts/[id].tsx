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

const codeCheck = (code: any) => {
  if(code) {
    // return <div dangerouslySetInnerHTML={{__html: code}}></div>;
    return (
      <div dangerouslySetInnerHTML={{__html: code}}></div>
    )
  }
}

const youtubeCheck = (youtube: string) => {
  if(youtube) {
    return (
      <iframe width="100%" height="415" src={youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
          {youtubeCheck(postData.youtube)}
          {audioCheck(postData.audiofile)}
          {codeCheck(postData.code.code)}
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} className={styles.content}>
          </div>
        </div>
      </div>
    </Layout>
  );
}