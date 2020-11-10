import React, {useState, useEffect} from "react";
import {fetchImages} from './service';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Image from "./components/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [isBusy, setIsBusy] = useState([true]);

  useEffect(() => {
    fetchApi()
  }, []);

  const fetchApi = async () => {
    setImages([...images, ...await fetchImages()]);
    setIsBusy(false);
  };

  return (
    <div style={{background: "#fff"}}> 
    <Navbar />
      {isBusy ? (
        <div></div>
      ) : (
      <div className="container">
       
        <div>
                  {images &&
                  <InfiniteScroll
                      dataLength={images.length}
                      next={fetchApi}
                      hasMore={true}
                      loader={<Loader/>}
                      >
                      
                        <div className="image-container">
                          {images.filter(image => image.id === image.id).map((image, index) => (
                              <Image url={image.urls.regular} key={index}/>
                          ))}
                        </div>
                        
                  </InfiniteScroll>
                  }
          </div>
      </div>
      )}
  </div>
  );
}

export default Gallery;