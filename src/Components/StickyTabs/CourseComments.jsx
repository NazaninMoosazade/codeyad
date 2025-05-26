export default function CourseComments({ comments }) {
  return (
    <div id="comments" className="p-4 dark:!bg-bgDarker bg-bgWhite mt-8">
      <h2 className="text-xl dark:!text-white font-DanaDemiBold font-bold mb-2">نظرات دانشجویان</h2>
      <p className="dark:text-gray-300 font-Dana">{comments}</p>
    </div>
  );
}
