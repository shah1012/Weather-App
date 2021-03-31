import React from "react";
import {
  TopDiv,
  InfoDiv,
  AddressLabel,
  DegreeLabel,
  WeatherDescription,
  IconImage,
} from "../../styles/Topbar-styles";

const TopCard = ({ card, name }) => {
  return (
    <TopDiv>
      <InfoDiv>
        <AddressLabel>{name}</AddressLabel>
        <DegreeLabel>{card.main.temp}°</DegreeLabel>
        <WeatherDescription>{card.weather[0].description}</WeatherDescription>
      </InfoDiv>
      <IconImage
        src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
      />
    </TopDiv>
  );
};

export default TopCard;
