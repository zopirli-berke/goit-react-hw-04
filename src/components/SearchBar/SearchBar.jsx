import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query.trim());
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          className={css.searchbar}
          onChange={handleChange}
        />
        <button className={css.searchbtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
