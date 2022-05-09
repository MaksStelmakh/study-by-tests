import QuestionsContainer from "./components/QuestionsContainer/QuestionsContainer";
import { data } from "./question/data";

function App() {
  return (
    <div>
      <QuestionsContainer data={data} />
    </div>
  );
}

export default App;
