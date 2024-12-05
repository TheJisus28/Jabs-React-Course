function Actividad1() {
  const kings = {
    sisebuto: {
      name: "Sisebuto",
      img: "public/reyes/rey_sisebuto.png",
    },
    leovigildo: {
      name: "Leovigildo",
      img: "public/reyes/rey_leogivildo.png",
    },
    atanagildo: {
      name: "Atanagildo",
      img: "public/reyes/rey_atanagildo.png",
    },
  };
  return (
    <>
      <ul className="flex justify-around mt-4">
        {Object.entries(kings).map(([key, king]) => (
          <li
            key={key}
            className="bg-yellow-500 rounded-xl p-4 w-[32%] flex flex-col justify-center"
          >
            <img src={king.img} alt={"Imagen del rey" + king.name} />
            <p className=" text-center mt-2 text-2xl">{king.name}</p>
          </li>
        ))}
      </ul>

      <p className="text-center text-6xl mt-10">
        <a
          href="https://www.html6.es/cursos/reyes.zip"
          target="_blank"
          className="text-sky-600"
        >
          www.html6.es/cursos/
          <span className="text-orange-500">reyes.zip</span>
        </a>
      </p>
    </>
  );
}

export default Actividad1;
