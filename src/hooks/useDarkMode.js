import useLocalStorage from './useLocalStorage';
import {useState} from 'react';

const useDarkMode = (key, initialValue) => {

    const [value, setValue] = useLocalStorage(key, initialValue);

    return [value, setValue];
};

export default useDarkMode;