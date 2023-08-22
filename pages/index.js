import Head from "next/head";
import Header from "/components/Header";
import Hero from "/components/Hero";
import NewsLetter from "/components/NewsLetter.js";
import Vision from "/components/Vision";
import Blogs from "@/components/Blogs";
import LogoW from "@/components/LogoW";
import Footer from "@/components/Footer";

import Services from "@/components/services";
import axios from "axios";

import { Bitter as Serif } from "@next/font/google";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact.js";
const serif = Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

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
      <Vision />
      <Services />
      <Blogs posts={data} />
      <NewsLetter />
      <AboutUs />

      <Contact />
      <Footer />
    </>
  );
}
