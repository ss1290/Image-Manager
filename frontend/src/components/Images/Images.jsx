import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listImage } from "../../store/slice";
import Pagination from "react-js-pagination";
import Loader from "../Loader/Loader";
import "./Images.css";
import ImageCard from "./ImageCard";

const Images = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { images, imagesCount, resultPerPage, loading } = useSelector(
    (state) => state.Image
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(listImage(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='container'>
          {images.length === 0 ? (
            <h1>No Images!</h1>
          ) : (
            <>
              {" "}
              <div className='images'>
                {images &&
                  images.map((image, index) => (
                    <ImageCard
                      key={index}
                      image={image}
                    />
                  ))}
              </div>
              <div className='paginationBox'>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={imagesCount}
                  onChange={setCurrentPageNo}
                  nextPageText='Next'
                  prevPageText='Prev'
                  firstPageText='1st'
                  lastPageText='Last'
                  itemClass='page-item'
                  linkClass='page-link'
                  activeClass='pageItemActive'
                  activeLinkClass='pageLinkActive'
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Images;
