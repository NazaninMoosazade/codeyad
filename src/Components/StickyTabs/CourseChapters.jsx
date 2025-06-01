export default function CourseChapters({ chapters }) {
  return (
    <div id="chapters" className="p-4 dark:bg-bgDarker bg-bgWhite mt-8">
      <h2 className="text-xl font-DanaDemiBold font-bold mb-2 dark:!text-white">سرفصل‌های دوره</h2>

      <div className="space-y-3">
        {chapters?.length > 0 ? (
          chapters.map((chapter) => (
            <div key={chapter._id} className="border-b border-gray-200 pb-2">
              <h3 className="font-DanaBold text-base dark:text-white">{chapter.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">مدت زمان: {chapter.duration}</p>
            </div>
          ))
        ) : (
          <p className="dark:text-gray-300 font-Dana">سرفصلی برای این دوره ثبت نشده است.</p>
        )}
      </div>
    </div>
  );
}
