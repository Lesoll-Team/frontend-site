import About from "@/components/about/About";
import React from "react";
import Head from "next/head";

export default function about() {
  return (
    <div>
    <Head>
      <title>Lesoll About</title>
    </Head>
      <About />
    </div>
  );
}
