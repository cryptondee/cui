import Head from "next/head";
import Header from "/components/Header";
import Hero from "/components/Hero";
import NewsLetter from "/components/NewsLetter";
import Team from "/components/Team";
import Blogs from "@/components/Blogs";
import LogoW from "@/components/LogoW";
import Footer from "@/components/Footer";
import ValueAdd from "@/components/ValueAdd";
import Services from "@/components/services";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/getPosts`
  );
  const data = await res.data.data.data;

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Castle Capital</title>
        <meta
          name="description"
          content="We navigate the dynamic world of DeFi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/Logo-W-favi.ico" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Blogs posts={data} />
      <NewsLetter />
      <ValueAdd />
      <Team />
      <Footer />
    </>
  );
}
