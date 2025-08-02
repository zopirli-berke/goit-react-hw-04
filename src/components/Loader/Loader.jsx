import { GridLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <GridLoader color="#a685fa" size={15} />
    </div>
  );
}
