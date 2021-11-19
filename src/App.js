import React from "react";
import "./App.css";
import Search from "./components/search/search";
import Results from "./components/results/results";
import { LoadMore } from "./components/load/load";

function App() {
    return (
        <div className="App">
            <Search />
            <div className="container">
                <Results />
            </div>
            <LoadMore />
        </div>
    );
}

export default App;
