import { useState, useEffect } from "react";
import GalleryHeader from "../components/GalleryHeader";
import "./Gallery.css";
import GalleryBody from "../components/GalleryBody";

// eslint-disable-next-line react/prop-types
function Gallery({ setDisplay, display }) {
  const [myData, setMyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("earth");

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page_size=12&page=${pageNum}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.info(data.collection.items);
        setMyData((prevState) => [...prevState, ...data.collection.items]);
      })
      .catch((error) => console.error(error));
  }, [searchQuery, pageNum]);

  return (
    <div className="gallery" id="home" style={{ top: display ? "0" : "100%" }}>
      <GalleryHeader
        setGalleryVisible={setDisplay}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        setPageNum={setPageNum}
        setMyData={setMyData}
      />
      {myData ? <GalleryBody data={myData} setPageNum={setPageNum} /> : ""}
    </div>
  );
}

export default Gallery;
