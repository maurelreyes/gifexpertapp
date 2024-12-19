export const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">GifExpertApp</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:underline">
                                Maurel Reyes
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};