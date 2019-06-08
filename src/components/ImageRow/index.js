import React from "react";
import PropTypes from "prop-types";
const ImageRow = ({ images }) => {
  console.log('IMAGES');
  console.log(images);
  console.log('IN IMAGE ROW');
  if (!images) return null;
  console.log('actually rendering');
  return (
  <div className="image-row">
    {images.map(image => (
      <img
        src={image.images.fixed_width.url}
        width={image.images.fixed_width.width}
        height={image.images.fixed_width.height}
      />
    ))}
  </div>
);
}

ImageRow.defaultProps = {
  images: [],
}

ImageRow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({

  }))
};
export default ImageRow;
