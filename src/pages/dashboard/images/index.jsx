import { getImagesBlogs } from "@/utils/dashboardApi/imagesApi";

const Index = ({ images }) => {
  return <div>Images and delete</div>;
};

export default Index;
export async function getServerSideProps() {
  const images = await getImagesBlogs();
  return {
    props: {
      images: images,
    },
  };
}
