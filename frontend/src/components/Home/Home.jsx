import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { uploadImage, listImage } from "../../store/slice";
import Loader from "../Loader/Loader";
import swal from "sweetalert";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Image);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      title,
      description,
      image,
    };
    dispatch(uploadImage(payload));
    dispatch(listImage(1));
    swal({
      title: "Image Uploaded Succesfully",
      icon: "success",
    });
  };
  const selectImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='uploadImage'>
          <form
            onSubmit={handleSubmit}
            className='imageForm'>
            <div>
              <label htmlFor='title'>Title:</label>
              <input
                value={title}
                required={true}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                name='title'
              />
            </div>
            <div>
              <label htmlFor='Description'>Description:</label>
              <input
                value={description}
                required={true}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                name='description'
              />
            </div>
            <div>
              <label htmlFor='Image'>Choose Image:</label>
              <input
                type='file'
                required={true}
                name='image'
                accept='image/*'
                onChange={selectImage}
              />
            </div>
            <button>Upload</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Home;
