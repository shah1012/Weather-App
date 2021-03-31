import React from "react";
import { SearchDiv, SearchInput, SearchIcon } from "../styles/Searchbar-styles";

const Searchbar = ({ onSearchChange, onSearch, name }) => {
  return (
    <SearchDiv>
      <SearchInput
        placeholder={"Search your city name"}
        onChange={(e) => onSearchChange(e)}
        value={name}
      />
      <SearchIcon onClick={onSearch} />
    </SearchDiv>
  );
};

export default Searchbar;
