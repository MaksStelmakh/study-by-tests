import QuestionsContainer from "./components/QuestionsContainer/QuestionsContainer";
import { data } from "./question/data";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <h1>Начинаем тестирование</h1>
      <QuestionsContainer data={data} />
    </MainContainer>
  );
}

export default App;
