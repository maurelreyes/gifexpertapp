import { useState } from "react";
import { Header, GifGrid, SearchCategory } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const addCategorie = (newCategory) => {
        if (categories.find((category) => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <Header/>
            <div className="p-7">
                <SearchCategory onNewCategory={addCategorie}/>
                {
                    categories.map((category) =>
                        <GifGrid key={category} category={category}/>
                    )
                }
            </div>
        </>
    )
}