import React from "react";
import ResultImg from "./ResultImg";

const ResultColumn = (props)=>{
    const gifovi=props.data;

    return(
        <div className="result-col">
            {gifovi.map((gif)=> (
                <ResultImg img={gif}/>
            ))}
        </div>
    )
}


export default ResultColumn;