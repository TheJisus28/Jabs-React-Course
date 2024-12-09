function FetchApi() {
  const url = "https://randomuser.me/api/";
  const petition = fetch(url);
  petition
    .then((data) => data.json())
    .then((data) => console.log(data.results[0].name.first))
    .catch(() => console.log("something was wrong"));

  //we can see the message 2 times, this happens because the function is executed the same number of times, the first time when the code is loaded and the second time when the component is rendered.

  //if we want that the code execution only once (when the component is rendered) we need to use a hook (useEffect())

  return <div>Clase5</div>;
}

export default FetchApi;
