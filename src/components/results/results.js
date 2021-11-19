import React from "react";
import { connect } from "react-redux";
import { Card } from "../card/card";
import "./results.css";

function Results(props) {
    if (props.searchResult === null) {
        return <div>Nothing.</div>;
    }
    return (
        <div className="results row row-cols-4">
            {props.searchResult.results.map((result) => {
                // console.log(result.id);
                return <Card image={result} key={result.id} />;
            })}
        </div>
    );
}

function mapStatetoProps(state) {
    return {
        searchResult: state.search_result,
    };
}

export default connect(mapStatetoProps)(Results);
