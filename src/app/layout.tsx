import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Pastport — Utforsk fortiden",
  description:
    "La historien komme til live. Oppdag skjulte perler, løs gåter og bygg din samling – rett der du er.",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
 