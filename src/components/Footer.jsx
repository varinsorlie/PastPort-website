// export default function Footer() {
//   return (
//     <footer className="text-center py-8 border-t">
//       <p>Pastport</p>
//       <p>123-456-7890 | info@mysite.com | 500 Terry Francois Street, San Francisco</p>
//       <div className="space-x-4">
//         <a href="#">Facebook</a>
//         <a href="#">Instagram</a>
//         <a href="#">X</a>
//         <a href="#">TikTok</a>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
       <a href="mailto:admin@pasthive.no" className="email-link">Kontakt oss: request@pasthive.no</a>
      <p>&copy; {new Date().getFullYear()} PastPort. Alle rettigheter reservert.</p>
    </footer>
  );
}

export default Footer;
