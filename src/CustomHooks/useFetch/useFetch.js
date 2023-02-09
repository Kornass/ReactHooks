import { useState, useEffect } from "react";
// We receive an fetching url to our useFetch hook. As you can see, hooks are just pure javascript functions that's getting imported from the file
function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // Performing fetching in the useEffect, where we set a states
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // comment that disables warning about dependencies array in useEffect:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // We are returning from our function our states that have been manipulated by useFetch function. We can destructure them while calling our hook to retrieve a ready-to-use values after fetching operation
  return { data, loading, error };
}

export default useFetch;
