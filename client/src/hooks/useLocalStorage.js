import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storageData = localStorage.getItem(key);
        if (!storageData) {

            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
        return JSON.parse(storageData);
    });

    const setStorageData = (value) => {
        if (!value) return;
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    };

    return [value, setStorageData];
};