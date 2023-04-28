import { useContext } from "react";
import { WordcloudGameContext } from "../../context/WordcloudGameContext";
import useResult from "../../hooks/useResult";
import { QuestionType } from "../../types/Question";
import "./Result.css";

const Result = ({ data }: { data: QuestionType }) => {
  const { name } = useContext(WordcloudGameContext);
  const { result } = useResult(data);

  return (
    <div className="result">
      <h2>Congratulations, {name}! </h2>
      <h2>Your score:</h2>
      <h2 className="score">{result} points</h2>
    </div>
  );
};

export default Result;
