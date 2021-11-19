import { createSlice } from "@reduxjs/toolkit";

function process(results) {
    return results.map((result) => {
        return {
            id: result.id,
            description: result.description,
            url: result.urls.small,
            link: result.links.html,
        };
    });
}

export const search_result = createSlice({
    name: "search_result",
    initialState: null,
    reducers: {
        updateresult: (state, action) => {
            console.log("updating result");
            console.log(action.payload);
            const { total, total_pages, results } = action.payload;
            console.log(total, total_pages);
            const new_results = process(results);
            state = {
                results: new_results,
            };
            return state;
        },
        appendresult: (state, action) => {
            console.log("appending result");
            console.log(action.payload);
            const { total, total_pages, results } = action.payload;
            const new_results = process(results);
            state = {
                results: [...state.results, ...new_results],
            };
            return state;
        },
        setdefault: (state) => {
            state = null;
            return state;
        },
    },
});

export const {
    updateresult,
    appendresult,
    setdefault: defaultresult,
} = search_result.actions;

export const selectSearchResult = (state) => state.search_result;
