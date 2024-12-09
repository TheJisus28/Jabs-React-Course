/* eslint-disable react/prop-types */
function Button({ text, onClick }) {
  return (
    <button
      className="text-white py-2 px-8 rounded-md bg-teal-base"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}

export default Button;
