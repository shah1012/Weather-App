import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

export const SearchDiv = styled.div`
  width: 540px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;

  margin: 25px 0 25px 0;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: normal;
  line-height: 46px;

  width: 475px;
  height: 100%;
  text-align: center;
`;

export const SearchIcon = styled(AiIcons.AiOutlineSearch)`
  width: 55px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
`;
