import PropTypes from "prop-types";
import {useState} from "react";

export const SearchCategory = ({ onNewCategory }) => {

    const [search, setSearch] = useState('');

    const onInputChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(search.trim().length > 0) {
            onNewCategory(search.trim());
            setSearch("");
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="flex items-center bg-gray-200 rounded-md p-2 w-full">
                {/* Ícono de búsqueda */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m2.85-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                {/* Input de texto */}
                <input
                    type="text"
                    placeholder="Buscar categoría..."
                    className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
                    value={search}
                    onChange={onInputChange}
                />
            </div>
        </form>
    )
}

SearchCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}