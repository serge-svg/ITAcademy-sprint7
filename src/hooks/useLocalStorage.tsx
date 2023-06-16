import { useState, useEffect } from "react";

type ReturnType<T> = [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
]

const useLocalStorage = <T,>(
    key: string,
    defaultValue?: T
): ReturnType<T> => {
    const [value, setValue] = useState<T | undefined>(() => {
        if (!defaultValue) return;
        try {
            const value =  localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (error) {
            console.error(error);
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(error);
            }
        }    
    }, [value, key]);

    return [value, setValue]
}

export default useLocalStorage;