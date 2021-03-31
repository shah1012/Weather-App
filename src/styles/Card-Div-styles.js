import styled from "styled-components";

export const GridDiv = styled.div`
  width: 66%;
  max-width: 1100px;

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  height: 275px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #8ebbe4;

  border-radius: 20px;
`;

export const CardDate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 37px;
  text-align: center;

  width: 100%;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 125px;

  border-radius: 20px;
`;

export const MaxDegreeLabel = styled.h1`
  font-size: 20px;
  color: #000000;
  margin: 0 10px 0 0;
`;

export const MinDegreeLabel = styled.h1`
  font-size: 20px;
  color: #5b5454;
`;

export const DegreeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
