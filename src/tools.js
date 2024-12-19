export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tTq56BZw5mkiTqM9iqwtT1Z0olTh7dVS&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => ({
        title: gif.title,
        url: gif.images.original.url,
        id: gif.id,
    }));
    return {
        gifs: gifs,
        status: resp.status
    }
}

export const loadCategories = () => {
    const historyCategory = localStorage.getItem("categories");
    if(historyCategory) {
        return JSON.parse(historyCategory);
    }
    return []
}