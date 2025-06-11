import { useState, useEffect } from 'react';
import { ApiResponse, ApiStatus } from '../types';

export const useFetch = <T>(url: string): ApiResponse<T> => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    status: ApiStatus.Idle,
    error: null,
  });

  useEffect(() => {
    setResponse((prev) => ({ ...prev, status: ApiStatus.Loading }));
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data: T) => {
        setResponse({ data, status: ApiStatus.Success, error: null });
      })
      .catch((error: Error) => {
        setResponse({
          data: null,
          status: ApiStatus.Error,
          error: error.message,
        });
      });
  }, [url]);

  return response;
};