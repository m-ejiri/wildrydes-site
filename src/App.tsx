import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Unicorns from "./pages/Unicorns";
import Investors from "./pages/Investors";
import Faq from "./pages/Faq";
import Apply from "./pages/Apply";
import { useAuth } from "react-oidc-context";

export default function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5q1uu3auhi0bia4r2qqq4744rk";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://<user pool domain>";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }
  return (
    <AppLayout>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
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
