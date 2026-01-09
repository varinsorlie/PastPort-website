import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
     <header className={`top-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">PastPort</div>
       <nav>
          <a href="https://pasthive.no">Plattform</a>
          <a href="#features">App</a>
          <a href="#team">Om oss</a>
            <form
        onSubmit={(e) => {
          e.preventDefault();
          // naviger til nettskjemaet når brukeren klikker submit
          window.location.href = "https://nettskjema.no/a/566846#/page/1";
        }}
      >
        <button className="button-primary">Bli med</button>
      </form>
            {/* <a className="button-primary" href="#join">Bli med</a> */}
            
      </nav>
    </header>
  );
}

export default Header;

