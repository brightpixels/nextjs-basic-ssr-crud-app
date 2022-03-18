function People({ data }) {
  return (
    <div>
      {/* <p>hello{data}</p> */}
      <ul>
        {data.map((i) => {
          return (
            <li key={i.id}>
              <a href={`/planets/${i.id}`}>
                {i.name ? i.name : "[no name set]"}
              </a>
            </li>
          );
        })}
      </ul>
      <a href="/planets/add">Add planet</a>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/planets");
  const data = await res.json();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
export default People;
