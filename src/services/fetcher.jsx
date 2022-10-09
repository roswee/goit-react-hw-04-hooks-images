import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const fetchImg = async (searchValue, page) => {
    try {
        const params = new URLSearchParams({
            key: "28362795-a7a194b938437c9cbae959d13",
            q: searchValue,
            page,
            per_page: 12,
        })
    const response = await axios.get(`?${params}`)
    return response.data.hits}
    catch (error) {
        console.log(`Unfortunately, it's a problem: ${error.name}: ${error.message}`);
    };
}