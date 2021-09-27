import { useState, useEffect } from "react";

const useApi = (apiFunc: any) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    try {
      setLoading(true);
      const response: any = await apiFunc(...args);
      setLoading(false);
      setError(!response.ok);
      setData(response.data);
      return response;
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
