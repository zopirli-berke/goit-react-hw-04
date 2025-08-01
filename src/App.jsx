import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const handleSearch = (query) => {
    toast.success(`Searching for: ${query}`);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
