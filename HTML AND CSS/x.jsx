// index.jsx (single-file example for easy copy-paste)
// How to use: place this in a Vite/CRA project or open in CodeSandbox. Tailwind utility classes are included but optional.

import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

// --- App component (default export) ---
export default function App() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('cat')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // simple fetch example (free public API)
    let ignore = false
    async function fetchPic() {
      setLoading(true)
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1`)
        const j = await res.json()
        if (!ignore) setData(j[0])
      } catch (e) {
        if (!ignore) setData(null)
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    fetchPic()
    return () => { ignore = true }
  }, [query])

  return (
    <div className="min-h-screen p-6 font-sans flex flex-col items-center gap-6">
      <header className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold">React + ReactDOM example</h1>
        <p className="text-sm text-gray-600">Counter, controlled input, fetch + effect</p>
      </header>

      <main className="w-full max-w-2xl bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <div>
            <strong>Count:</strong> {count}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCount(c => c - 1)} className="px-3 py-1 rounded border">-</button>
            <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 rounded border">+</button>
            <button onClick={() => setCount(0)} className="px-3 py-1 rounded border">reset</button>
          </div>
        </section>

        <section>
          <label className="block text-sm font-medium">Search (changes fetch):</label>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="type to change (no effect on this simple example)"
            className="mt-1 w-full rounded p-2 border"
          />
        </section>

        <section>
          <strong>Fetch example (TheCatAPI):</strong>
          <div className="mt-2">
            {loading && <div>loading...</div>}
            {!loading && data && (
              <div className="flex flex-col items-center gap-2">
                <img src={data.url} alt="cat" style={{ maxWidth: 320, borderRadius: 12 }} />
                <div className="text-xs">id: {data.id}</div>
              </div>
            )}
            {!loading && !data && <div>No data</div>}
          </div>
        </section>

        <footer className="text-xs text-gray-500">Built with React + ReactDOM.createRoot()</footer>
      </main>
    </div>
  )
}

// --- render (index.js equivalent) ---
// If you're using a bundler entrypoint, keep this snippet in your project's entry file.
if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root') || (() => {
    const d = document.createElement('div')
    d.id = 'root'
    document.body.appendChild(d)
    return d
  })()

  const root = createRoot(rootEl)
  root.render(<App />)
}
