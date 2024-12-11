import { Link } from "react-router-dom";
import usableKings from "../../data/usable-kings";

function Home() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-screen p-4">
      {usableKings.map((king) => (
        <Link
          to={`/king/${king.key}`}
          key={king.key}
          className="flex items-center justify-center border p-6 rounded-md"
        >
          <img
            src={king.img}
            alt={king.name}
            className="h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 object-cover rounded-full"
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
