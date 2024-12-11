function Error404() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black text-center">
        Error 404
      </h1>
      <p className="text-1xl md:text-2xl lg:text-3xl text-center">
        {" "}
        page not found
      </p>
    </div>
  );
}

export default Error404;
