export const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">
                    GifExpertApp <small className="text-gray-200 font-light italic">(Buscador avanzdo de gifs)</small>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a target="_blank" href="https://github.com/maurelreyes/" className="text-white hover:underline">
                                Ing. Maurel Reyes
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};