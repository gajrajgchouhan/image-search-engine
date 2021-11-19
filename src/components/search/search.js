import React from "react";
import { connect, useDispatch } from "react-redux";
import { updateresult } from "../../app/search_result";
import { updateSearchTerm } from "../../app/searchterm";
import { defaultpageno } from "../../app/pageno";
import { searchImage } from "../../app/api";
import "./search.css";
import icon from "./search-3-256.png";

function Search(props) {
    const placeholder = "add a search term";
    const dispatch = useDispatch();
    const searchterm = props.searchterm;
    const pageno = props.pageno;
    console.log(searchterm);

    const clickhandler = async () => {
        dispatch(defaultpageno());
        if (searchterm === "") return;
        const result = await searchImage(searchterm, pageno);
        dispatch(updateresult(result));
    };
    return (
        <div className="container">
            <div className="search row mx-auto">
                <div className="col-10">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchterm}
                        onChange={(e) => {
                            dispatch(updateSearchTerm(e.target.value));
                        }}
                        required
                    ></input>
                </div>
                <div className="col-2">
                    <button onClick={clickhandler}>
                        <img src={icon} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function mapStatetoProps(state) {
    return {
        pageno: state.pageno.value,
        searchterm: state.searchterm.value,
    };
}

export default connect(mapStatetoProps)(Search);
