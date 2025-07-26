import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 py-4 border-b border-border flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand">Small Town Vibes</h1>
        <nav className="space-x-4 text-sm">
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#dine" className="hover:underline">Dine</a>
          <a href="#explore" className="hover:underline">Explore</a>
        </nav>
      </header>

      <main className="px-6 py-10">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>
          <p className="max-w-prose text-muted">This is the starter shell. If you can see brand colors and Tailwind spacing working, the stack is wired correctly. Swap this out with your real components next.</p>
        </section>

        <section className="mb-12" id="counter">
          <h3 className="text-lg font-medium mb-4">Quick sanity counter</h3>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark transition"
          >
            Count: {count}
          </button>
        </section>

        <section id="shop" className="mb-8">
          <h3 className="text-lg font-medium mb-2">Shop Local</h3>
          <p className="text-sm text-muted">List your businesses here…</p>
        </section>

        <section id="dine" className="mb-8">
          <h3 className="text-lg font-medium mb-2">Dine Local</h3>
          <p className="text-sm text-muted">Restaurants go here…</p>
        </section>

        <section id="explore" className="mb-8">
          <h3 className="text-lg font-medium mb-2">Explore Local</h3>
          <p className="text-sm text-muted">Events / experiences…</p>
        </section>
      </main>

      <footer className="px-6 py-4 border-t border-border text-xs text-muted">
        © {new Date().getFullYear()} Small Town Vibes
      </footer>
    </div>
  )
}