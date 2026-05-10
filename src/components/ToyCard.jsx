import React from "react";

function ToyCard({toy, setToysList}) {
  async function handleDelete () {
    const response = await fetch (`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    if(response.ok){
     setToysList(prev=> prev.filter(t => t.id !== toy.id))
    }

  }

async function handleLike () {
  const response = await fetch  (`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
    if (response.ok) {
      const data = await response.json()
      setToysList(prev => prev.map(t => t.id === toy.id ? data : t))

    }

}
  return (
    <div className="card" data-testid="toy-card">
      <h2>{ toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;