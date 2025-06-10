export default function CourseContent({ content }) {
  return (
    <div id="content" className="p-4 dark:!bg-bgDarker bg-bgWhite">
      <h2 className="text-xl font-DanaDemiBold font-bold mb-2 dark:!text-white">محتوای دوره</h2>

      <div className="space-y-4">
     
            {/* <div  className="border-b border-gray-200 pb-2">
              <h3 className="font-DanaBold text-base dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{content.description}</p>
            </div>
        */}
      </div>
    </div>
  );
}
