import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  // body スクロールロック & ESCで閉じる
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="btn-menu"
        aria-label="Open menu"
        aria-controls="overlay-menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true" />
      </button>

      {/* オーバーレイ（ページの上に固定） */}
      {open && (
        <div
          id="overlay-menu"
          role="dialog"
          aria-modal="true"
          className="menu-overlay"
          onClick={() => setOpen(false)}
        >
          <div className="menu-sheet" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="btn-menu-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <ul className="overlay-links">
              {/* ここを全部 Link に */}
              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/unicorns" onClick={() => setOpen(false)}>
                  Meet the Unicorns
                </Link>
              </li>
              <li>
                <Link to="/investors" onClick={() => setOpen(false)}>
                  Investors &amp; Board of Directors
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={() => setOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/apply" onClick={() => setOpen(false)}>
                  Apply
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
