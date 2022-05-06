import QuestionsContainer from "./components/QuestionsContainer/QuestionsContainer";
import { data } from "./question/data";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <QuestionsContainer data={data} />
    </MainContainer>
  );
}

export default App;
