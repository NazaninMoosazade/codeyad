export default function CourseChapters({ chapters }) {
  return (
    <div id="chapters" className="p-4 bg-bgWhite mt-8">
      <h2 className="text-xl font-bold mb-2">سرفصل‌های دوره</h2>
      <p>{chapters}</p>
    </div>
  );
}