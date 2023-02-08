import useFetch from "../CustomHooks/useFetch";
function CustomuseFetch() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {data.map((post) => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </div>
  );
}

export default CustomuseFetch;
