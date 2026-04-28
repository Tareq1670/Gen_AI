export const getPhotos = async () => {
    const res = await fetch("https://gen-ai-api-mn23.onrender.com/photos");
    const data = res.json();
    return data
}