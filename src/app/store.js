import { configureStore } from "@reduxjs/toolkit";
import { pageno } from "./pageno";
import { searchterm } from "./searchterm";
import { search_result } from "./search_result";

export const store = configureStore({
    reducer: {
        pageno: pageno.reducer,
        search_result: search_result.reducer,
        searchterm: searchterm.reducer,
    },
});
