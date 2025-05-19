export default function CourseComments({ comments }) {
  return (
    <div id="comments" className="p-4 bg-bgWhite mt-8">
      <h2 className="text-xl font-bold mb-2">نظرات دانشجویان</h2>
      <p>{comments}</p>
    </div>
  );
}
