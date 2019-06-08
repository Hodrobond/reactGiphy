import React from "react";
import PropTypes from "prop-types";
import style from './ImageRow.css';

console.log('STYLE:', style);

const ImageRow = ({ images }) => {
  if (!images) return null;
  return (
  <div className={style.ImageRow}>
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
