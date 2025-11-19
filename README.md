# React Lazy Loading Demo

This is a minimal educational project built with **Vite**, **TypeScript**, and **React Router**.  
It demonstrates how to implement **lazy loading** using `React.lazy` and `Suspense` for route-based components.

## Features

- ⚡️ Fast setup with Vite and TypeScript
- 🧠 Lazy loading of route components using `React.lazy`
- ⏳ Fallback loading UI with `Suspense`
- 🧭 Basic routing with `react-router-dom`

## Folder Structure

src/ ├── pages/ │   ├── Home.tsx │   └── About.tsx ├── App.tsx └── main.tsx


## How It Works

- The `Home` and `About` pages are placed in `src/pages`.
- Both pages are imported using `React.lazy` inside `App.tsx`.
- Routing is handled with `Routes` and `Route` from `react-router-dom`.
- `Suspense` wraps the routes to show a fallback UI while components are loading.

Routes
- / → Home page
- /about → About page (lazy loaded)
- 
Purpose
This project is intended for learning and demonstration only.
It does not include advanced features, styling, or production-level configuration.

Created by Soroush Iliyat

