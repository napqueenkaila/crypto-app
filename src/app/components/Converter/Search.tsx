import { SetStateAction, useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="&#128270;  Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </>
  );
};
export default Search;
