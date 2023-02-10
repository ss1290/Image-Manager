import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../store/slice";
import Loader from "../Loader/Loader";
import "./image.css";
const Image = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const { loading, image } = useSelector((state) => state.Image);
  useEffect(() => {
    dispatch(updateCount(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='imageContainer'>
          <img
            src={image.imgUrl}
            alt={Image.imgUrl}
          />
          <h2>{image.title}</h2>
          <p>{image.description}</p>
          <p>Seen {image.seenCount + 1} times</p>
        </div>
      )}
    </>
  );
};

export default Image;
