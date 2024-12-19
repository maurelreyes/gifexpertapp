export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NOek53jJ81MYUpFUnk96Y3uKxJ0TEmVc&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data.map((gif) => ({
        title: gif.title,
        url: gif.images.original.url,
        id: gif.id,
    }))
}