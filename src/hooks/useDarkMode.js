import useLocalStorage from './useLocalStorage';
import {useState} from 'react';

const useDarkMode = (key, initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    return [darkMode, setDarkMode];
};

export default useDarkMode;