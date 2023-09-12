import { Button, Pagination } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function property({ propertyHome }) {
  let [pageNumber, setPageNumber] = useState(1);
  let [pageq, setPageq] = useState(100);
  const router = useRouter();
  const handleNextPage = () => {
    setPageNumber(router.push(`/property/${pageNumber}`));
  };

  return (
    <div className="overflow-x-hidden min-h-[100dvh]">
      <Head>
        <title>property</title>
      </Head>
      <h2>
        {propertyHome.map((property) => (
          <div key={property._id}>
            <Link href={`/propertyDetails/${property._id}`}>
              <div>{property._id}</div>
            </Link>
          </div>
        ))}
      </h2>

      <div>
        <Button onClick={handleNextPage}>Next</Button>

        <div className="py-2 px-2 flex justify-between items-center">
          <Pagination
            showControls
            classNames={{
              cursor: "bg-foreground text-background",
            }}
            color="danger"
            page={pageNumber}
            total={pageq}
            variant="light"
            onChange={handleNextPage}
            // initialPage={6}
          />
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { page } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethome?limit=10&page=${page}` //limit|| page||
  );
  const data = await res.json();

  return {
    props: { propertyHome: data.result },
  };
}
