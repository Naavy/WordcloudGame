import { useContext, useState } from "react";
import Word from "./Word";
import { WordcloudGameContext } from "../../context/WordcloudGameContext";
import { StepGameType } from "../../types/StepGame";
import { QuestionType } from "../../types/Question";
import "./Game.css";

const Game = ({ data }: { data: QuestionType }) => {
  const { setStepGame } = useContext(WordcloudGameContext);
  const [checkMode, setCheckMode] = useState(false);
  const title = data.question.charAt(0).toUpperCase() + data.question.slice(1);

  const handleClick = () => {
    if (checkMode) {
      setStepGame(StepGameType.Result);
    } else {
      setCheckMode(true);
    }
  };

  return (
    <div className="game">
      <h2>{title}</h2>
      <div className="words-container">
        {data.all_words.map((word) => (
          <Word
            key={word}
            word={word}
            goodWords={data.good_words}
            checkMode={checkMode}
          />
        ))}
      </div>
      <button className="step-button" onClick={handleClick}>
        {checkMode ? "finish game" : "check answers"}
      </button>
    </div>
  );
};

export default Game;
