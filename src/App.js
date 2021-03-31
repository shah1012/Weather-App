import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { Background } from "./components/containers/Background";
import Searchbar from "./components/Searchbar";
import TopCard from "./components/containers/TopCard";
import CardGrid from "./components/containers/CardHolder";
import Selector from "./components/Selector";

function App() {
  //state
  const [weatherData, setWeatherData] = useState([]);
  const [name, setName] = useState("London");
  const [title, setTitle] = useState("London");
  const [selected, setSelected] = useState("00:00:00");
  const [currList, setCurrList] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}data/2.5/forecast?q=${name}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        let list = data.list;
        setCurrList(list);
        setWeatherData(
          list.filter((item) => item.dt_txt.substring(11, 20) === selected)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  //functions

  const changeName = (e) => {
    setName(e.target.value);
  };

  const onSearchSubmit = (e) => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}data/2.5/forecast?q=${name}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        let list = data.list;
        setCurrList(list);
        setWeatherData(
          list.filter((item) => item.dt_txt.substring(11, 20) === selected)
        );
      })
      .catch((err) => console.log(err));

    setTitle(name);
    setName("");
  };

  const onSelectedChange = (e) => {
    setSelected(e.target.value);
    setWeatherData(
      currList.filter((item) => item.dt_txt.substring(11, 20) === selected)
    );
  };

  return !weatherData.length ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <Background>
      <Header />
      <Searchbar
        onSearchChange={changeName}
        onSearch={onSearchSubmit}
        name={name}
      />
      <Selector selectedChange={onSelectedChange} />
      <TopCard card={weatherData[0]} name={title} />
      <CardGrid cards={weatherData} />
    </Background>
  );
}

export default App;
