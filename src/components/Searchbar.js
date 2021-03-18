import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

export const SearchDiv = styled.div`
  display: flex;

  width: 500px;
  height: 50px;
  border-radius: 5px;

  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-size: 1.5rem;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  border: none;
  outline: none;

  width: 100%;
  height: 50px;

  background-color: #dedede;
`;

export const SearchIcon = styled(AiIcons.AiOutlineSearch)`
  font-size: 30px;
  color: #c4c4c4;
  width: 10%;
  cursor: pointer;
`;
