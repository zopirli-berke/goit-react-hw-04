import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { toast, Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import { fetchImages } from "./api/images.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setImages([]);
      setError(null);
      setIsLoading(true);
      const fetchedImages = await fetchImages(query);

      if (fetchedImages.length === 0) {
        toast.error("No images found for your search.");
      } else {
        setImages(fetchedImages);
      }
    } catch (error) {
      setError("Whoops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
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
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
