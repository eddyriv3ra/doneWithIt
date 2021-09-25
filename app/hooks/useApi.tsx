import { useState, useEffect } from "react";

const useApi = (apiFunc: any) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      const response: any = await apiFunc();
      if (!response.ok) {
        setLoading(false);
        return setError(true);
      }
      setError(false);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return { error, data, loading, request };
};

export default useApi;
