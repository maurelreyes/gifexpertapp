import {useEffect, useState} from "react";
import {getGifs} from "../tools.js";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(resp => {
                setGifs(resp);
                setIsLoading(false)
            });
    }, [category]);

    return {
        gifs,
        isLoading,
    }
}