function Person({ id }) {
  return (
    <div>
      Are you sure you want to delete planet <i>{id}</i>?
      <form action={`http://localhost:3000/api/planets/${id}/delete`}>
        <p>
          <button type="submit">Delete</button>{' '}
          <a href={`/planets/${id}`}>Cancel</a>
        </p>
      </form>
    </div>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/planets/${id}/`)
  const data = await res.json()
  //probably no need to make api call and just passing in the id
  //but issue with serialsizng
  return {
    props: JSON.parse(JSON.stringify(data)),
  }
}

export default Person
