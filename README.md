# The Gaming Hub

Six browser games behind one shell — built to practise game loops, state and collision handling in React rather than to ship a product.

React · TypeScript · Vite

---

## The games

| Game | Idea |
|---|---|
| **Color Clash** | Reaction game on colour matching |
| **Memory Grid** | Card-matching memory grid |
| **Moon Drop** | Falling-object catch game |
| **Number Smash** | Speed and sequencing against the clock |
| **Pixel Runner** | Side-scrolling endless runner |
| **World Whirl** | Rotational puzzle |

Plus an animated starfield backdrop and a shared navigation shell.

## Why it exists

Each game is a different problem. A memory grid is pure state and comparison. An endless runner is a frame loop with collision detection and difficulty that scales with time. A reaction game lives or dies on input timing. Building them in one codebase, behind one router, makes the contrast between those shapes obvious in a way that six separate repos would not.

## Structure

```
gaminghubcode/
└── src/
    ├── App.tsx            router and shell
    └── pages/             one file per game, plus Home, About and Navbar
```

## Running locally

```bash
cd gaminghubcode
npm install
npm run dev
```

---

Built by [Jeremy Ahamioje](https://github.com/JeremyAhamioje).
