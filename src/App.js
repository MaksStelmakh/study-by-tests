import "./App.css";
import QuestionsContainer from "./components/QuestionsContainer/QuestionsContainer";
import { data } from "./question/data";

function App() {
  return (
    <div className="App">
      <h1>Начинаем тестирование</h1>
      <QuestionsContainer data={data} />
    </div>
  );
}

export default App;
