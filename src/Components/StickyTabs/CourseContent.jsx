export default function CourseContent({ content }) {
  return (
    <div id="content" className="p-4 dark:!bg-bgDarker bg-bgWhite">
      <h2 className="text-xl font-DanaDemiBold font-bold mb-2 dark:!text-white">محتوای دوره</h2>

      <div className="space-y-4">
        {Array.isArray(content) && content.length > 0 ? (
          content.map((item) => (
            <div key={item._id} className="border-b border-gray-200 pb-2">
              <h3 className="font-DanaBold text-base dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="font-Dana dark:text-gray-300">محتوایی برای این دوره وجود ندارد.</p>
        )}
      </div>
    </div>
  );
}
