import styled from "@emotion/styled";

export const TimerDiv = styled.div`
  margin: 20px auto 20px auto;
  background-color: #2f4f4f;
  width: 200px;
  height: auto;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 1) inset;

  p {
    transition: all 250ms linear;
    font-size: 25px;
    font-weight: bold;
    font-family: "Permanent Marker", cursive;
    border: 2px solid black;
    border-radius: 2px;
    background-color: #dcdcdc;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
      border: none;
      cursor: pointer;
      transition: all 250ms linear;
      background-color: inherit;
      font-size: 28px;
      transition: all 250ms linear;

      &:hover {
        opacity: 0.7;
      }
    }

    h3 {
      margin: 0;
      font-size: 25px;
      font-family: "Permanent Marker", cursive;
    }
  }
`;
