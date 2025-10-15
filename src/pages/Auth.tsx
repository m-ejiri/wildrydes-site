import { useEffect } from "react";

export default function Auth() {
  useEffect(() => {
    document.body.classList.add("page-auth");
    return () => document.body.classList.remove("page-auth");
  }, []);

  return (
    <div className="auth">
      <header className="auth-header">
        <img src="/images/logo.png" alt="Wild Rydes" />
      </header>

      <div className="auth-card">
        <h2>Sign in to your account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <span>Username *</span>
            <input type="text" placeholder="" />
          </label>
          <label>
            <span>Password *</span>
            <input type="password" placeholder="" />
          </label>
          <div className="auth-help">
            <a href="#">Forgot your password?</a>
            <a href="#" className="link">
              Reset password
            </a>
          </div>
          <div className="auth-actions">
            <button type="submit" className="btn-primary">
              SIGN IN
            </button>
          </div>
        </form>

        <div className="auth-foot">
          <span>No account?</span>
          <a href="#" className="link">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
