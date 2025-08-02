import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { toast, Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import { fetchImages } from "./api/images.js";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const fetchedImages = await fetchImages(query);
      if (fetchedImages.length === 0) {
        toast.error("No images found for your search.");
      } else {
        setImages(fetchedImages);
      }
    } catch (error) {
      toast.error("An error occurred while fetching images.");
    }
  };

  const handleImageClick = (image) => {
    console.log("Image clicked:", image);
    //Modal buraya eklenecek
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
      <ImageGallery images={images} onImageClick={handleImageClick} />
    </>
  );
}

export default App;
