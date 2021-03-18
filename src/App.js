import React, { useEffect } from "react";
import "./App.css";
import { Background } from "./components/containers/Background";
import { SearchDiv, SearchInput, SearchIcon } from "./components/Searchbar";

function App() {
  //state
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}data/2.5/forecast?q=London,us&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    // api.openweathermap.org/data/2.5/forecast?q=London,us&appid={API key}
  }, []);

  return (
    <div className="App">
      <Background>
        <SearchDiv>
          <SearchInput />
          <SearchIcon />
        </SearchDiv>
      </Background>
    </div>
  );
}

export default App;
