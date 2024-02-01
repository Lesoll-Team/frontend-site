const SubmitPageRedirect = () => {
  return null;
};

export default SubmitPageRedirect;
export async function getServerSideProps(context) {
  context.res.writeHead(410);
  context.res.end();
  return {
    props: {},
  };
}
