import "./globals.css";
import { Header } from "./Header/Header";

export const metadata = {
  title: "Skai Tech Radar",
  description: "Skai Tech Radar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/public/favicon.ico" />
      <body className="h-full bg-gray-100 min-h-screen max-w-screen overflow-x-clip">
        <main className="py-10 w-full">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
