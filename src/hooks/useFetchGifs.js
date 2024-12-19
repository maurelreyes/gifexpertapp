import {useEffect, useState} from "react";
import {getGifs} from "../tools.js";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLimitExceeded, setIsLimitExceeded] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(resp => {
                setIsLimitExceeded(resp.status === 429);
                setGifs(resp.gifs);
                setIsLoading(false)
            });
    }, [category]);

    return {
        gifs,
        isLoading,
        isLimitExceeded,
    }
}