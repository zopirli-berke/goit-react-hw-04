import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorMessage}>{message}</p>
    </div>
  );
}
