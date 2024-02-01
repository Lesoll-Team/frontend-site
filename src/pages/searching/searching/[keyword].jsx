import { useEffect } from "react";
import { useRouter } from "next/router";
const SearchPageRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the new URL
    const keywords = router.asPath;

    router.push(`/searching/${keywords}`);
  }, [router]);
  return null;
};
export default SearchPageRedirect;
