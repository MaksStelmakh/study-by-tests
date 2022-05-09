import styled from "@emotion/styled";

export const Answers = styled.div`
  background-color: ${(p) => (p.isSelected ? "yellow" : "#C0C0C0")};
  pointer-events: ${(p) => (p.isDisabled ? "none" : "auto")};
  border: 1px solid black;
  width: auto;
  min-height: 40px;
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

export const Correct = styled.p`
  color: green;
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 2.6;
  }
`;

export const Wrong = styled.p`
  color: red;
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 3.2;
  }
`;

export const HomeProgress = styled.div`
  height: 25px;
  width: 690px;
  background-color: #c0c0c0;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px 5px 0 5px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Progress = styled.div`
  background-color: green;
  height: 15px;
  border-radius: 5px;
  transition: all 250ms linear;

  @media screen and (max-width: 800px) {
    display: none;
  }
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

  @media screen and (max-width: 570px) {
    padding: 9px 10px 8px;
    font-size: 13px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const DivAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 250px;
  height: 40px;
  background-color: #dcdcdc;
  border-radius: 5px;
  border: 2px solid black;

  @media screen and (max-width: 470px) {
    width: 30%;
  }

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
