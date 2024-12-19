import PropTypes from "prop-types";

export const GifCard = ({url,  title})=> {
    return (
        <div className="rounded-lg shadow-lg bg-white p-2 m-2">
            <img
                src={url}
                alt={title}
                className="h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </div>
        </div>
    )
}

GifCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}