import React from "react";
import PropTypes from "prop-types";
import ImageRow from '../ImageRow';

const ImageGrid = ({ rowWidth, images }) => {
  const slicedImages = images.reduce((fin, image, i) => {
    const arrIndex = Math.floor(i / rowWidth);
    if (!fin[arrIndex]) fin[arrIndex] = [];
    fin[arrIndex].push(image);
    return fin;
  }, []);
  return (
    <div className="image-grid">
      {slicedImages.map(row => (
        <ImageRow
          images={row}
        />
      ))}
    </div>
  );
};

ImageGrid.defaultProps = {
  rowWidth: 3,
}

ImageGrid.propTypes = {
  rowWidth: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.shape({

  }))
};
export default ImageGrid;
