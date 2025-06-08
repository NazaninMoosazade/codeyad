export default function CourseComments({ comments }) {
  return (
    <div id="comments" className="p-4 dark:!bg-bgDarker bg-bgWhite mt-8">
      <h2 className="text-xl dark:!text-white font-DanaDemiBold font-bold mb-2">نظرات دانشجویان</h2>

      <div className="space-y-4">
        {comments?.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="border-b border-gray-300 pb-4">
              <p className="text-gray-800 dark:text-gray-200">
                {comment.body}
                </p>
              <p className="text-sm text-gray-500 mt-1">
                توسط: {comment.creator?.name || "ناشناس"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">هنوز نظری ثبت نشده است.</p>
        )}
      </div>
    </div>
  );
}
