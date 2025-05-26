export default function CourseContent({ content }) {
  return (
    <div id="content" className="p-4 dark:!bg-bgDarker bg-bgWhite">
      <h2 className="text-xl font-DanaDemiBold font-bold mb-2 dark:!text-white">محتوای دوره</h2>
      <p className="font-Dana dark:!text-gray-300">{content}</p>
    </div>
  );
}