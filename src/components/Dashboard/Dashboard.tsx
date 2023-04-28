import { useContext } from "react";
import { WordcloudGameContext } from "../../context/WordcloudGameContext";
import { StepGameType } from "../../types/StepGame";
import Game from "../Game/Game";
import Login from "../Login/Login";
import Result from "../Result/Result";
import useFetch from "../../hooks/useFetch";
import "./Dashboard.css";

const Dashboard = () => {
  const { stepGame } = useContext(WordcloudGameContext);
  const numberQuestion = Math.floor(Math.random() * 3) + 1;
  const { data, isLoading, isError } = useFetch(
    `src/data/question${numberQuestion}.json`
  );

  if (isLoading) return <>Loading...</>;
  if (isError || data == null)
    return <>Something went wrong please reload the page.</>;

  return (
    <div className="dashboard">
      {stepGame === StepGameType.Login && <Login />}
      {stepGame === StepGameType.Game && <Game data={data} />}
      {stepGame === StepGameType.Result && <Result data={data} />}
    </div>
  );
};

export default Dashboard;
