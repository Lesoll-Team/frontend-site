import { getImagesBlogs } from "@/utils/dashboardApi/imagesApi";

const Index = ({ images }) => {
  console.log("images::>>>", images);
  return <div>Images and delete</div>;
};

export default Index;
export async function getServerSideProps() {
  const images = await getImagesBlogs();
  // console.log("images on :>>>", images);
  return {
    props: {
      images: images,
    },
  };
}
