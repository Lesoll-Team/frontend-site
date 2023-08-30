// pages/loading.js

import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingPage = () => {
  const router = useRouter();

  // Simulate loading time with a delay
  useEffect(() => {
    const loadingTime = 10000; // 3 seconds
    const timeout = setTimeout(() => {
      // Redirect to the actual content page after the loading time
    //   router.push('/');
    }, loadingTime);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="min-h-screen flex items-center w-full justify-center">
        {/* Your logo animation or loader goes here */}
        <span className='animate-ping  absolute inline-flex  rounded-full  opacity-90'>
        <img src="icons/logoNavbar.png" width={250} height={250} alt="Logo" className=" " />
        </span>
      </div>
    </>
  );
};

export default LoadingPage;
