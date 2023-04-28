import { useContext, useEffect, useState } from "react";
import { clsx } from "clsx";
import { WordcloudGameContext } from "../../context/WordcloudGameContext";

interface WordType {
  word: string;
  goodWords: string[];
  checkMode: boolean;
}

const Word = ({ word, goodWords, checkMode }: WordType) => {
  const { selectedWordsList, setSelectedWordsList } =
    useContext(WordcloudGameContext);
  const [isSelected, setIsSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [position, setPosition] = useState({ top: "0", left: "0" });
  const selectedClassName = isSelected ? "selected-word" : "word";
  const correctClassName = clsx(
    isCorrect && "good-word",
    isCorrect === false && "bad-word"
  );

  useEffect(() => {
    setPosition({
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`
    });
  }, []);

  useEffect(() => {
    if (isSelected) {
      setSelectedWordsList([...selectedWordsList, word]);
    } else {
      setSelectedWordsList(selectedWordsList.filter((item) => item !== word));
    }
  }, [isSelected]);

  const onClickWord = () => {
    setIsSelected(!isSelected);
    setIsCorrect(goodWords.includes(word));
  };

  return (
    <button
      style={{
        position: "absolute",
        top: position.top,
        left: position.left
      }}
      onClick={onClickWord}
      className="word-button"
      disabled={checkMode}
    >
      <span className={`${selectedClassName} ${checkMode && correctClassName}`}>
        {checkMode && isCorrect && <span className="answer">dobrze</span>}
        {checkMode && isCorrect === false && (
          <span className="answer">źle</span>
        )}
        {word}
      </span>
    </button>
  );
};

export default Word;
