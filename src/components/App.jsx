import React, { useState,  useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysList, setToysList] = useState([])
  const BASE_URL = "http://localhost:3001"

useEffect(() =>{
   async function fetchToys (){
    try{
      const response = await fetch (`${BASE_URL}/toys`)
      if (!response.ok){
        throw new Error("Error fetching toys")
      }
      const data = await response.json()
      setToysList(data)

    } catch (error) {
      console.error('error.message', error)
    }
   }
   fetchToys()
}, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToysList={setToysList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToysList ={ setToysList} toysList = {toysList} />
    </>
  );
}

export default App;