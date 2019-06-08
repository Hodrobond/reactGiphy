import React from "react";
import PropTypes from "prop-types";
const ImageRow = ({ images }) => {
  console.log('IMAGES');
  console.log(images);
  console.log('IN IMAGE ROW');
  if (!images || !images.images) return null;
  console.log('actually rendering');
  return (
  <div className="image-row">
    {images.images.map(image => (
      <img
        src={imageObj.images.fixed_width.url}
        width={imageObj.images.fixed_width.width}
        height={imageObj.images.fixed_width.height}
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
