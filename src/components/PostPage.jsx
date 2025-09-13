import React from 'react';

export default function PostPage({ post, goHome }) {
  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow">
      <button onClick={goHome} className="text-sm mb-4 text-slate-600">← 回到列表</button>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-xs text-slate-500 mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}
