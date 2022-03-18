function People({ data }) {
  return (
    <div>
      <p>Add a planet</p>
      <form method="POST" action="http://localhost:3000/api/planets/add">
        <div>
          <label>Name: </label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label>Population: </label>
          <input type="text" name="population"></input>
        </div>
        <button type="submit">Add</button> <a href="/planets">Cancel</a>
      </form>
    </div>
  )
}

export default People
