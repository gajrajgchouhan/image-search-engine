import { createSlice } from "@reduxjs/toolkit";

export const searchterm = createSlice({
    name: "searchterm",
    initialState: {
        value: "",
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update: updateSearchTerm } = searchterm.actions;
export const selectSearchTerm = (state) => state.searchterm.value;
