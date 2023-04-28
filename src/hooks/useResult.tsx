import { useContext, useEffect, useState } from "react";
import { QuestionType } from "../types/Question";
import { WordcloudGameContext } from "../context/WordcloudGameContext";

const useResult = (data: QuestionType | null) => {
  const { selectedWordsList } = useContext(WordcloudGameContext);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (data == undefined) return;
    let score = 0;
    for (let i = 0; i < selectedWordsList.length; ++i) {
      const item = selectedWordsList[i];
      if (data.good_words.includes(item)) {
        score = score + 2;
      } else {
        score = score - 1;
      }
    }
    const unselectedCorrectAnswers = data.good_words.filter(
      (item) => !selectedWordsList.includes(item)
    );
    if (unselectedCorrectAnswers.length > 0) {
      score = score - unselectedCorrectAnswers.length;
    }
    setResult(score);
  }, []);

  return { result };
};

export default useResult;
