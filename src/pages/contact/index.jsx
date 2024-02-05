import { useRouter } from "next/router";
import { useEffect } from "react";

const ContactRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(`/contact-us`);
  }, [router]);
  return null;
};

export default ContactRedirect;
