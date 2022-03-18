function Person({ id, name, population }) {
  return (
    <div>
      <div></div>
      <ul>
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Poplation: {population}</li>
      </ul>
      <a href={`/planets/${id}/edit`} role="button">
        Edit
      </a>{" "}
      <a href={`/planets/${id}/delete`} role="button">
        Delete
      </a>
    </div>
  );
}
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/planets/${id}/`);
  const data = await res.json();
  return {
    props: JSON.parse(JSON.stringify(data)),
  };
}
export default Person;
