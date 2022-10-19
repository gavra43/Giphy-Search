import React from "react";
import ResultColumn from "./ResultsColumn";

const SearchResults = (props)=>{

const slike = props.data;
const colNum = 4


    return(
        <div className="search-res">
            <ResultColumn data={slike.filter((e,i, niz)=> i%4===0)}/>
            <ResultColumn data={slike.filter((e,i, niz)=>i%4===1)}/>
            <ResultColumn data={slike.filter((e,i, niz)=>i%4===2)}/>
            <ResultColumn data={slike.filter((e,i, niz)=>i%4===3)}/>
        </div>
    );
};


export default SearchResults;
