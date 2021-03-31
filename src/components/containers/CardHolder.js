import React from "react";
import {
  GridDiv,
  Card,
  CardDate,
  CardImage,
  MinDegreeLabel,
  MaxDegreeLabel,
  DegreeWrapper,
} from "../../styles/Card-Div-styles";

// getting which day it is
const getDay = (date) => {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
};
//

const CardHolder = ({ cards }) => {
  return (
    <GridDiv>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardDate>{getDay(card.dt_txt.substring(0, 10))}</CardDate>
          <CardImage
            src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
          />
          <DegreeWrapper>
            <MaxDegreeLabel>{card.main.temp_max}°</MaxDegreeLabel>
            <MinDegreeLabel>{card.main.temp_min}°</MinDegreeLabel>
          </DegreeWrapper>
        </Card>
      ))}
    </GridDiv>
  );
};

export default CardHolder;
