import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Unicorns from "./pages/Unicorns";
import Investors from "./pages/Investors";
import Faq from "./pages/Faq";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/unicorns" element={<Unicorns />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/apply" element={<Apply />} />
        {/* 不明パスはトップへ */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
