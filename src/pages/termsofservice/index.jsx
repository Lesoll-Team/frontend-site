import TermsOfService from "@/components/termsofservice/TermsOfService";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Lesoll Terms</title>
      </Head>
      <TermsOfService />
    </>
  );
};
export default index;
