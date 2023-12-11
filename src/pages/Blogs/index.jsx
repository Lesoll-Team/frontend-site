import { useEffect } from "react";
import { useRouter } from "next/router";
const BlogRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(`/blog`);
  }, [router]);
  return null;
};

export default BlogRedirect;
