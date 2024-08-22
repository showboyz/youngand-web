import { Inter } from "next/font/google";
import "./globals.css";




export const metadata = {
  title: "Youngand",
  description: "Transform Your Health with Digital Therapeutics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}  
        </body>
    </html>
  );
}
