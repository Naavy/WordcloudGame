import { createContext, useState } from "react";
import { StepGameType } from "../types/StepGame";

interface WordcloudGameContextType {
  name: string;
  setName: (name: string) => void;
  stepGame: StepGameType;
  setStepGame: (stepGame: StepGameType) => void;
  selectedWordsList: string[];
  setSelectedWordsList: (selectedWordsList: string[]) => void;
}

const initalContext = {
  name: "",
  setName: () => "",
  stepGame: StepGameType.Login,
  setStepGame: () => StepGameType.Login,
  selectedWordsList: [],
  setSelectedWordsList: () => []
};

export const WordcloudGameContext =
  createContext<WordcloudGameContextType>(initalContext);

export const WordcloudGameContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [name, setName] = useState("");
  const [stepGame, setStepGame] = useState(StepGameType.Login);
  const [selectedWordsList, setSelectedWordsList] = useState<string[]>([]);

  return (
    <WordcloudGameContext.Provider
      value={{
        name,
        setName,
        stepGame,
        setStepGame,
        selectedWordsList,
        setSelectedWordsList
      }}
    >
      {children}
    </WordcloudGameContext.Provider>
  );
};
