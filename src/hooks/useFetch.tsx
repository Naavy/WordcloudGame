import { useEffect, useState } from "react";
import { QuestionType } from "../types/Question";

const useFetch = (url: string) => {
  const [data, setData] = useState<QuestionType | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setIsError(true);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
