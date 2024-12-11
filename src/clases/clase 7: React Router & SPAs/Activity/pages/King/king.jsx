import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usableKings from "../../data/usable-kings";

function King() {
  const { king } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (king.toLowerCase() === "leogivildo") {
      navigate("/king/leovigildo", { replace: true });
    }
  }, [king, navigate]);

  const foundKing = usableKings.find((kingObj) => kingObj.key === king);

  if (!foundKing) {
    return <div>No se encontró el rey.</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img
        src={foundKing.img}
        alt={foundKing.name}
        className="h-80 w-80 object-cover rounded-full"
      />
      <h1 className="text-4xl font-bold text-center mt-4 text-gray-800">
        {foundKing.name}
      </h1>
    </div>
  );
}

export default King;
