import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.ImageGalleryItem}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
