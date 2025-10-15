import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <Header />
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
