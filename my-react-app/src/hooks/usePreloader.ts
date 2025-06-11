import { useEffect, useState } from 'react';

const usePreloader = (delay: number = 1500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.display = 'block'; // Show page content
    }, delay);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [delay]);

  return { isLoading };
};

export default usePreloader;