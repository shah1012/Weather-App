import React from "react";
import { SelectorWrapper, SelectOption } from "../styles/selector.styles";

const timesArray = [
  {
    name: "12 AM",
    value: "00:00:00",
  },
  {
    name: "3 AM",
    value: "03:00:00",
  },
  {
    name: "6 AM",
    value: "06:00:00",
  },
  {
    name: "9 AM",
    value: "09:00:00",
  },
  {
    name: "12 PM",
    value: "12:00:00",
  },
];

const Selector = ({ selectedChange }) => {
  return (
    <SelectorWrapper onChange={selectedChange}>
      {timesArray.map((item, index) => (
        <SelectOption key={index} value={item.value}>
          {item.name}
        </SelectOption>
      ))}
    </SelectorWrapper>
  );
};

export default Selector;
