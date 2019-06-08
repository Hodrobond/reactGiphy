import React from "react";
import PropTypes from "prop-types";
const ImageRow = ({ images }) => (
  <div className="image-row">
    {images.map(image => {
      <img
        src={imageObj.images.fixed_width.src}
        width={imageObj.images.fixed_width.width}
        height={imageObj.images.fixed_width.height}
      />
    })}
  </div>
);

ImageRow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({

  }))
};
export default ImageRow;
