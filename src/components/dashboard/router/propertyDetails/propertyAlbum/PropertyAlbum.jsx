import { useEffect, useState } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the styles

const PropertyAlbum = ({ propertyDetails }) => {
  const [images, setImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const propertyImages = propertyDetails.getProperty.album.map((img) => {
      return img.image;
    });
    setImages([...propertyImages, propertyDetails.getProperty.thumbnail]);
  }, [propertyDetails.getProperty.album]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="absolute text-2xl font-semibold focus:outline-none rounded-md bottom-0 py-2 w-full right-0 bg-lightGreen p-2 text-center text-white"
      >
        اضغط لعرض الصور
      </button>
      <div className="absolute p-3 top-2 left-2 rounded-full h-10 flex items-center justify-center w-10 bg-white">
        <p className="text-xl font-medium text-darkGreen">{images.length}</p>
      </div>
      <img
        onClick={() => setIsOpen(true)}
        src={propertyDetails.getProperty.thumbnail}
        className="w-[100%] max-h-[500px] rounded-md object-cover cursor-pointer"
      />

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default PropertyAlbum;
