import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const storyMeta = ({ data }) => {
  return (
    <Gallery>
      <div>
        {data.album.map((image) => {
          return (
            <Item
              cropped
              original={image.image}
              thumbnail={image.image}
              width="1920"
              height="2879"
            >
              {({ ref, open }) => (
                <img src={image.image} ref={ref} onClick={open} />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default storyMeta;
