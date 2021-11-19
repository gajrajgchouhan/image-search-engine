import { createSlice } from "@reduxjs/toolkit";

export const pageno = createSlice({
    name: "pageno",
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        setdefault: (state) => {
            state.value = 1;
        },
    },
});

export const { increment, setdefault: defaultpageno } = pageno.actions;
export const selectPageNo = (state) => {
    return state.pageno.value;
};
