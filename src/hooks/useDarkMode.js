import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);
  useEffect(() => {
    // if the value is true, add dark-mode class to body (document.body.classList.add('dark-mode'))
    // if the value is false, remove dark-mode from body (document.body.classList.remove('dark-mode'))
    return darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
