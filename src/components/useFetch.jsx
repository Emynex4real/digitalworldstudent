import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setIsError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsError(err.message);
          setIsPending(false);
        }
      });

    return () => abortCont.abort(); // cleanup
  }, [url]);

  return { data, isPending, isError };
};

export default useFetch;