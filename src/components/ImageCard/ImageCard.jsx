import css from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  return (
    <>
      <div
        key={image.id}
        className={css.ImageCard}
        onClick={() => onImageClick(image)}
      >
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={css.Image}
        />
      </div>
    </>
  );
}
