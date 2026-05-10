import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysList, setToysList}) {
  return (
    <div id="toy-collection">{toysList.map(toy=>(
      <ToyCard key={toy.id} toy ={toy} setToysList = {setToysList}/>
    ) )}</div>
  );
}

export default ToyContainer;