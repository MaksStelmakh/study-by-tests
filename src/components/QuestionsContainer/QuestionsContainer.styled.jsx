import styled from "@emotion/styled";

export const MainContainer = styled.div`
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

export const AnswersContainer = styled.div`
  width: 700px;
  height: auto;
  border-radius: 10px;
  padding: 20px;
  margin: 25px auto 0 auto;
  box-shadow: 0px 0px 12px 4px rgba(34, 60, 80, 0.5);
  background-color: #fffafa;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 470px) {
    width: 80%;
  }
`;

export const Form = styled.form`
  background-color: #fffafa;
  width: 400px;
  height: auto;
  margin: 80px auto 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  box-shadow: 0px 0px 12px 4px rgba(34, 60, 80, 0.5);

  @media screen and (max-width: 470px) {
    width: 80%;
    margin: 40px auto 0 auto;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  input {
    width: 300px;
    height: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #dcdcdc;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    @media screen and (max-width: 470px) {
      width: 80%;
    }

    &:hover {
      background-color: #c0c0c0;
    }
  }

  select {
    width: 321px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    background-color: #dcdcdc;
    border: 1px solid black;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 35px;

    @media screen and (max-width: 470px) {
      width: 85%;
    }

    &:hover {
      background-color: #c0c0c0;
    }

    option {
      background-color: #fffafa;
    }
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
    width: 150px;
    padding: 9px 20px 8px;
    position: relative;
    text-align: center;

    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
`;
