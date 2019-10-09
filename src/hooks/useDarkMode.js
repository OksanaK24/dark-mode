import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

export function useDarkMode(initialValue){
    const [darkMode, setDarkMode] = useLocalStorage("mode", initialValue);

    useEffect(() => {
        const body = document.querySelector("body");
        darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
    }, [darkMode])


    return [darkMode, setDarkMode];
}