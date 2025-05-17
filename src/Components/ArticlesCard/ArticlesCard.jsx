import React from 'react';

export default function ArticlesCard({ className = '', image, title, excerpt }) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col ${className}`}>
      {/* تصویر مقاله */}
      <div className="h-48 w-full">
        <img
          src={image || '/images/default-article.jpg'} // fallback image
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* محتوای مقاله */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-800">
          {title || 'عنوان مقاله'}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {excerpt || 'خلاصه‌ای از مقاله برای پیش‌نمایش در کارت مقالات.'}
        </p>
        <button className="text-blue-600 font-semibold hover:underline mt-auto self-start">
          ادامه مطلب →
        </button>
      </div>
    </div>
  );
}
