import axios from "axios";

const client_id = "rNizgk4EP4dk-uQlkglYf7WRvwZXjfkGKBySFdNifqk";

export async function searchImage(query, page) {
    const url = "https://api.unsplash.com/search/photos";
    const { data: res } = await axios.get(url, {
        params: {
            query: query,
            page: page,
            per_page: 16,
            orientation: "squarish",
            client_id: client_id,
        },
    });
    return res;
}
