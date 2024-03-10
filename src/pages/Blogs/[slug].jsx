import { useRouter } from "next/router";
import React, { useEffect } from "react";

const BlogsDetails = () => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the new URL
    const slug = router.query.slug;
    router.replace(`/blog/${slug}`);
  }, [router]);

  return null;
};

export default BlogsDetails;
