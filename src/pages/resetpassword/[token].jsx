import React from 'react'
import ResetPassword from "../../components/resetPassword/ResetPassword"
import Head from 'next/head';
function ResetPasswordPage() {
  return (
    <div className="container mx-auto  min-h-[95vh] flex items-center justify-center ">
      <Head>
        <title>Reset Password</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ResetPassword />
    </div>
  );
}

export default ResetPasswordPage