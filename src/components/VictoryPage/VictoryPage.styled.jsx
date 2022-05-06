import styled from "@emotion/styled";

export const ModalWindow = styled.div`
  width: 500px;
  height: 300px;
  padding: 40px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 1) inset;

  @media screen and (max-width: 430px) {
    height: 370px;
  }

  h2 {
    margin: 0 0 40px 0;
    font-family: "Permanent Marker", cursive;
  }

  p {
    font-family: "Permanent Marker", cursive;
    font-weight: 400;
    margin-bottom: 15px;
  }

  button {
    background-color: #008b8b;
    border-radius: 4px;
    border-style: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin: 0;
    width: 250px;
    padding: 9px 20px 8px;
    position: relative;
    text-align: center;
    margin-top: 20px;

    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
`;
