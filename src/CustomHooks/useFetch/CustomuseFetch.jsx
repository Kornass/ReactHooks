import useFetch from "./useFetch";
function CustomuseFetch() {
  // We are destructuring data and loading from useFetch hook (we pass in URL )
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="container">
      <h1 className="text-3xl">Custom Hook useFetch</h1>
      <p className="textSection">
        Why to create custom hooks? Custom React JS hooks offer reusability as
        when a custom hook is created, it can be reused easily, which makes the
        code cleaner and reduces the time to write the code. It also enhances
        the rendering speed of the code as a custom hook does not need to be
        rendered again and again while rendering the whole code. You can write
        custom Hooks that cover a wide range of use cases like form handling,
        animation, declarative subscriptions, timers, and probably many more we
        haven't considered.
      </p>
      <p className="textSection">
        Before we create a custom hook, you need to know that there are some
        rules to creating one:
        <br />
        Custom Hooks are named with "use" as prefix. For example, a custom hook
        could be named useLocalStorage or useAuthentication. In our case, the
        custom hook will be named useFetch. Custom Hooks consist of built-in
        React Hooks or other custom Hooks. Therefore a custom Hook is always a
        new composition of one or multiple Hooks. If a custom Hook does not use
        any hooks internally, it's not a custom Hook and shouldn't have the
        prefix "use".
      </p>
      <p className="textSection mb-2">
        In our useFetch hook we'll perform fetching from specified resource and
        we will return fetched data, loading state and error(if occurs)
      </p>
      {data.map((post) => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </div>
  );
}

export default CustomuseFetch;
