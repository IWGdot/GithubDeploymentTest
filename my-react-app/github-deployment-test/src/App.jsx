import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Hello, GitHub Pages! 🚀
      </h1>
      <p className="text-lg mb-6">
        This is a simple React app deployed from GitHub.
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
