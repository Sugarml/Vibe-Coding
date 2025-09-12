import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";


// 柔和配色與圓角設計範本
// 使用方式：此檔為單一 App component，搭配 TailwindCSS 使用最佳。
// - 在專案中安裝 react-router-dom、Tailwind（或自行轉成 CSS）
// - 將此檔放入 src/App.jsx，index.js 載入並 render <App /> 即可


const posts = [
{
id: '1',
title: '用柔和色打造友善閱讀體驗',
excerpt: '討論介面、字距與配色如何影響閱讀。',
content:
`在設計部落格時，柔和的配色與適度的留白可以降低閱讀疲勞。建議採用淺色卡片、圓角與 1.6 的行高。`,
date: '2025-09-12'
},
{
id: '2',
title: '如何寫出清晰的文章標題',
excerpt: '標題技巧分享。',
content:
`好標題能在三秒內說明文章價值。把核心句放在前面，副標補充細節。`,
date: '2025-09-05'
}
];


function Container({ children }) {
return (
<div className="min-h-screen bg-[#FBFAFF] p-6 md:p-12 text-gray-800">
<div className="max-w-4xl mx-auto">{children}</div>
</div>
);
}


function Header() {
return (
<header className="mb-8">
<div className="flex items-center justify-between">
<Link to="/" className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FCE7F3] to-[#E8F8F5] flex items-center justify-center shadow-sm">
<span className="font-bold text-lg">B</span>
</div>
<div>
<h1 className="text-xl md:text-2xl font-semibold">柔和部落格</h1>
<p className="text-sm text-gray-500">輕盈、親切、專注內容</p>
</div>
</Link>
<nav>
<Link to="/about" className="text-sm px-3 py-2 rounded-lg hover:bg-[#F5F7FF]">關於</Link>
</nav>
</div>
</header>
);
}


function Home() {
return (
<main>
<section className="mb-6">
<div className="p-6 rounded-2xl bg-white shadow-sm">
<h2 className="text-2xl font-semibold mb-2">最新文章</h2>
<p className="text-sm text-gray-500">以柔和色與圓角卡片呈現文章列表。</p>
</div>
</section>


<section className="grid gap-4">
{posts.map((p) => (
<article key={p.id} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
<Link to={`/post/${p.id}`} className="no-underline">
<h3 className="text-xl font-medium mb-1">{p.title}</h3>
<p className="text-sm text-gray-600 mb-3">{p.excerpt}</p>
<div className="flex items-center justify-between text-xs text-gray-400">
<span>{p.date}</span>
<span>閱讀時間 3 分鐘</span>
</div>
</Link>
</article>
))}
</section>
</main>
);
}


function About() {
return (
<div className="bg-white p-6 rounded-2xl shadow-sm">
<h2 className="text-xl font-semibold mb-2">關於本站</h2>
<p className="text-sm text-gray-600">這是一個範例部落格，風格採用柔和顏色與大圓角，適合想要打造閱讀友善介面的作者。</p>
</div>
}