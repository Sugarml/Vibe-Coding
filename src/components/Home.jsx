import React from 'react';
import Hero from './Hero';

export default function Home({ posts, openPost }) {
  return (
    <div>
      <Hero />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((p) => (
          <div key={p.id} onClick={() => openPost(p)} className="cursor-pointer bg-white/80 p-4 rounded-2xl shadow hover:shadow-md">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.excerpt}</p>
            <p className="text-xs text-slate-500 mt-2">{p.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
