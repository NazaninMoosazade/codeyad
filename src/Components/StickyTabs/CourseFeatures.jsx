export default function CourseFeatures({ features }) {
  return (
    <div id="course" className="p-4 bg-bgWhite mt-8">
      <h2 className="text-xl font-bold mb-2">ویژگی های دوره</h2>
      <p>{features}</p>
    </div>
  );
}
