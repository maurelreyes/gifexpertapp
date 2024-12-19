import PropTypes from "prop-types";
import {GifCard} from "./GifCard.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {
    const { isLoading, isLimitExceeded, gifs } = useFetchGifs(category);

    return (
        <div key={category} className="p-4">
            <h3 className="text-3xl font-bold text-blue-800 capitalize">{category}</h3>
            {
                isLoading
                    ? <h2 className="font-bold text-center">Loading...</h2>
                    : (gifs.length > 0)
                        ? (
                            <div className="flex">
                                {
                                    gifs.map((item) => (
                                        <GifCard key={item.id}  {...item} />
                                    ))
                                }
                            </div>
                        )
                        : isLimitExceeded
                            ? <h2 className="font-bold text-center text-red-600">Limit excedeed</h2>
                            : <h2 className="font-bold text-center text-red-600">Category not found</h2>
            }

        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string,
}