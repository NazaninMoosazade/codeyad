export default function CourseContent({ content }) {
  return (
    <div id="content" className="p-4 bg-bgWhite">
      <h2 className="text-xl font-DanaDemiBold font-bold mb-2">محتوای دوره</h2>
      <p className="font-Dana">{content}</p>
    </div>
  );
}