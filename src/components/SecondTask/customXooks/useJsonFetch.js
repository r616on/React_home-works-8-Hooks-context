import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts = false) {
  const { initialData } = opts;
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // eslint-disable-next-line
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    // eslint-disable-next-line
    fetchData();
    // eslint-disable-next-line
  }, []);

  return [data, loading, hasError];
}
