import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PreloaderHook {
  isLoading: boolean;
}

const usePreloader = (initialDelay: number = 1500): PreloaderHook => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Показываем прелоадер при начальной загрузке или смене маршрута
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [location.pathname, initialDelay]);

  return { isLoading };
};

export default usePreloader;