import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { toast, Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState, useEffect, use } from "react";
import { fetchImages } from "./api/images.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedImages = await fetchImages(query, page);

        if (fetchedImages.length === 0 && page === 1) {
          toast.error("No images found for this query.");
          return;
        }
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
      } catch (err) {
        setError("Whoops! Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  useEffect(() => {
    if (page > 1) {
      const cardHeight = 340;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      });
    }
  }, [images]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={openModal} />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />

      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
