function People({ id, name, population }) {
  return (
    <div>
      <p>Edit a planet</p>
      <form
        method="post"
        action={`http://localhost:3000/api/planets/${id}/edit`}
      >
        <div>
          <label>Name: </label>
          <input type="text" name="name" defaultValue={name}></input>
        </div>
        <div>
          <label>Population: </label>
          <input
            type="text"
            name="population"
            defaultValue={population}
          ></input>
          <input hidden type="text" name="id" defaultValue={id}></input>
        </div>
        <button type="submit">Save</button>{' '}
        <a href={`/planets/${id}`}>Cancel</a>
      </form>
    </div>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/planets/${id}/`)
  const data = await res.json()
  return {
    props: JSON.parse(JSON.stringify(data)),
  }
}
export default People
