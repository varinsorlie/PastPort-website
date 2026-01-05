// export default function JoinUs() {
//   return (
//     <section id="join" className="text-center py-16">
//       <h2 className="text-2xl font-bold mb-4">Venteliste</h2>
//       <p className="mb-8">Bli blant de første som tester ut Pastport!</p>
//       <a
//         href="https://nettskjema.no"
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
//       >
//         Sett deg på venteliste
//       </a>
//     </section>
//   );
// }

import React from "react";
import "./JoinUs.css";

function JoinUs() {
  return (
    <section className="join-us">
      <h2>Test appen!</h2>
      <p>Meld deg på i nettskjema for å få være med på å teste appen. <br></br> Du kan også søke om å bli en del av teamet vårt for videre utvikling!</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // naviger til nettskjemaet når brukeren klikker submit
          window.location.href = "https://nettskjema.no/a/566846#/page/1";
        }}
      >
        <button type="submit">Meld deg på</button>
      </form>
    </section>
  );
}

export default JoinUs;
