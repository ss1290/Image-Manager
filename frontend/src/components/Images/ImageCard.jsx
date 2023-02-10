import React from "react";
import { Link } from "react-router-dom";
const ImageCard = ({ image }) => {
  return (
    <Link
      className='imageCard'
      to={`/image/${image._id}`}>
      <img
        src={image.imgUrl}
        alt={image.imgUrl}
      />
      <p>{image.title}</p>
    </Link>
  );
};

export default ImageCard;
