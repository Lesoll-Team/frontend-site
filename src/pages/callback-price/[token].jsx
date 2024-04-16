import MetaTags from "@/components/callback-price/MetaTags";
import SuccessPay from "@/components/callback-price/SuccessPay";

const CallBackPrice = ({ token }) => {
   return (
      <>
         <MetaTags />
         <SuccessPay info={token.Package} />;
      </>
   );
};
export default CallBackPrice;
export async function getServerSideProps(context) {
   const token = context.query.token;
   let payload = null;

   if (token) {
      const [header, payloadEncoded, signature] = token.split(".");

      if (header && payloadEncoded && signature) {
         try {
            const decodedPayload = Buffer.from(
               payloadEncoded,
               "base64",
            ).toString("utf-8");
            payload = JSON.parse(decodedPayload);
         } catch (error) {
            return {
               redirect: {
                  destination: "/prices",
                  statusCode: 308,
               },
            };
         }
      } else {
         return {
            redirect: {
               destination: "/prices",
               statusCode: 308,
            },
         };
      }
   } else {
      return {
         redirect: {
            destination: "/prices",
            statusCode: 404,
         },
      };
   }

   return {
      props: {
         token: payload,
      },
   };
}
