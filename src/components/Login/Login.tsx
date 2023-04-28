import { useContext } from "react";
import { WordcloudGameContext } from "../../context/WordcloudGameContext";
import { StepGameType } from "../../types/StepGame";
import "./Login.css";

const Login = () => {
  const { name, setName, setStepGame } = useContext(WordcloudGameContext);

  return (
    <div className="login">
      <h1>Wordcloud game</h1>
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your nickname here..."
        className="input"
      />
      <button
        onClick={() => setStepGame(StepGameType.Game)}
        className="step-button"
        disabled={name === ""}
      >
        play
      </button>
    </div>
  );
};

export default Login;
