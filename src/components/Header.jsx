import React from 'react';

export default function Header({ setRoute }) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">SoftBlog</h1>
      <nav className="flex gap-3">
        <button onClick={() => setRoute('home')} className="px-3 py-1 rounded bg-white/60 shadow">首頁</button>
        <button onClick={() => setRoute('about')} className="px-3 py-1 rounded bg-white/60 shadow">關於</button>
      </nav>
    </header>
  );
}
