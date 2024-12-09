/* eslint-disable react/prop-types */
function CourseInformation({ title, text }) {
  return (
    <section className="pb-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-base sm:text-lg md:text-xl">{text}</p>
    </section>
  );
}

export default CourseInformation;
