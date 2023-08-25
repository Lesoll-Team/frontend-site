import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function property({ propertyHome }) {
  return (
    <div>
      <Head>
        <title>property</title>
      </Head>
      <h1>
        {propertyHome.map((property) => (
          <div key={property._id}>
            <Link href={`/property/${property._id}`}>
              <div>{property._id}</div>
            </Link>
          </div>
        ))}
      </h1>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethome?limit=15&page=2`
  );
  const data = await res.json();

  return { props: { propertyHome: data.result } };
}
