import css from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />
      )}
    </Modal>
  );
}
