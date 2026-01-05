import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

export default function App() {
  return (
   <div className="appen">

      <main className="main">
        <section id="hero" className="hero-section">
          <Hero />
        </section>

        <section id="features" className="features-section">
          <Features />
        </section>

        <section id="team" className="team-section">
          <Team />
        </section>

        <section id="join" className="join-section">
          <JoinUs />
        </section>
      </main>

      <Footer />
    </div>
  );
}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
