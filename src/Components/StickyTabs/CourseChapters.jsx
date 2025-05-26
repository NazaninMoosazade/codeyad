export default function CourseChapters({ chapters }) {
  return (
    <div id="chapters" className="p-4 dark:bg-bgDarker bg-bgWhite mt-8">
      <h2 className="text-xl font-DanaDemiBold font-bold mb-2 dark:!text-white">سرفصل‌های دوره</h2>
      <p className="dark:text-gray-300 font-Dana">{chapters}</p>
    </div>
  );
}