import styled from "@emotion/styled";

export const Answers = styled.div`
  background-color: ${(p) => (p.isSelected ? "yellow" : "#C0C0C0")};
  pointer-events: ${(p) => (p.isDisabled ? "none" : "auto")};
  border: 1px solid black;
  width: auto;
  height: 40px;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 5px 5px 15px;
  margin-top: 5px;
  font-size: 20px;
  line-height: 1.9;

  &:hover {
    background-color: #808080;
  }
`;

export const Correct = styled.div`
  color: green;
  width: 150px;
  height: 50px;
  border-radius: 40%;
  box-shadow: 0px 0px 30px 18px rgba(0, 255, 19, 0.5);
`;

export const Wrong = styled.div`
  color: red;
  width: 150px;
  height: 50px;
  border-radius: 40%;
  box-shadow: 0px 0px 41px 3px rgba(255, 0, 0, 1);
`;

export const Progress = styled.div`
  background-color: green;
  height: 20px;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 250ms linear;
`;

export const NameQuestion = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #008b8b;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
