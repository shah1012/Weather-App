import styled from "styled-components";
export const TopDiv = styled.div`
  width: 100%;
  height: 275px;
  max-width: 1100px;

  margin: 0 0 16px 0;

  background: linear-gradient(
    90deg,
    #0085ff 0.64%,
    rgba(142, 187, 228, 0.75) 100%
  );
  border-radius: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InfoDiv = styled.div`
  width: 475px;
  height: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;
`;

export const AddressLabel = styled.h1`
  width: 100%;
  height: 50px;

  font-weight: normal;
  font-size: 24px;
  line-height: 37px;
  color: #000000;
`;

export const DegreeLabel = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 97px;

  color: #000000;
  width: 100%;
`;

export const WeatherDescription = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;

  color: #000000;
  width: 100%;
`;

export const IconImage = styled.img`
  width: 150px;
`;
