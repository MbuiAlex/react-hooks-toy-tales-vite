import React from "react";

function ToyForm({setToysList}) {
  async function handleSubmit(e) {
    e.preventDefault()

    const name = e.target.elements.name.value
    const image = e.target.elements.image.value
    try{
    const response = await fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, likes: 0 }),
    });
    if (!response.ok) {
      throw new Error("Error posting data");
    }
    const data = await response.json();
    setToysList((prevToys) => [...prevToys, data])
  } catch (error) {
    console.error(error.message);
  }
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;