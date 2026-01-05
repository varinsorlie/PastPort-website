import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">PastPort</div>
      <nav>
        <ul>
          <li><a href="#hero">Hjem</a></li>
          <li><a href="#features">App</a></li>
          <li><a href="#team">Om oss</a></li>
          <li>
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
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

