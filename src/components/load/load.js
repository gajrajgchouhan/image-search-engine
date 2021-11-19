import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendresult, selectSearchResult } from "../../app/search_result";
import { selectPageNo, increment } from "../../app/pageno";
import { searchImage } from "../../app/api";
import { selectSearchTerm } from "../../app/searchterm";
import "./load.css";

export function LoadMore() {
    const dispatch = useDispatch();
    const pageno = useSelector(selectPageNo);
    const searchterm = useSelector(selectSearchTerm);
    if (useSelector(selectSearchResult) === null) {
        return null;
    }
    const clickHandler = async () => {
        dispatch(increment());
        const result = await searchImage(searchterm, pageno + 1);
        dispatch(appendresult(result));
    };
    return (
        <button className="load" onClick={clickHandler}>
            Load More
        </button>
    );
}
