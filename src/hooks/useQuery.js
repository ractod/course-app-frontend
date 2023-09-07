import { useEffect, useState } from "react";

const useQuery = (initialValue, queryFunction) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const result = await queryFunction();
        setData(result);
      } catch(error) {
        console.log(error)
        setError(true)
      }
      finally {setLoading(false);}
    })()
  }, []);

  return [data, {loading, setData, error}];
};

export default useQuery;
