"use client";

import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";

// No optional cookies, analytics or advertising SDKs are installed.
// This stores only the visitor's explicit request to dismiss the notice.
const key = "barberly-privacy-notice-v1";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}
function savedDismissal() {
  try { return localStorage.getItem(key) === "dismissed"; } catch { return false; }
}
export default function CookieNotice() {
  const dismissed = useSyncExternalStore(subscribe, savedDismissal, () => true);
  const [open, setVisible] = useState<boolean | null>(null);
  const visible = open ?? !dismissed;
  const [remember, setRemember] = useState(false);
  const notice = useRef<HTMLElement>(null);
  const settings = useRef<HTMLButtonElement>(null);
  function dismiss() {
    try {
      if (remember) localStorage.setItem(key, "dismissed");
      else localStorage.removeItem(key);
    } catch { /* All features remain usable if browser storage is blocked. */ }
    setVisible(false);
    settings.current?.focus();
  }
  return <>
    <button ref={settings} type="button" className="text-button"
      onClick={() => {
        setVisible(true);
        requestAnimationFrame(() => notice.current?.focus());
      }}>Cookie settings</button>
    {visible && <section ref={notice} tabIndex={-1} aria-labelledby="cookie-heading"
      className="cookie-notice">
      <h2 id="cookie-heading">Cookies &amp; privacy choices</h2>
      <p>We do not use analytics or advertising cookies. There are no optional
        trackers to accept. You can use this preview without agreeing to tracking.</p>
      <p><Link href="/cookies">Read the cookie policy</Link></p>
      <label className="check">
        <input type="checkbox" checked={remember}
          onChange={event => setRemember(event.target.checked)} />
        Remember that I dismissed this notice on this device until I clear it.
      </label>
      <div className="actions">
        <button type="button" onClick={dismiss}>Continue without optional cookies</button>
        <button type="button" className="secondary" onClick={() => {
          try { localStorage.removeItem(key); } catch {}
          setRemember(false);
          setVisible(false);
          settings.current?.focus();
        }}>Clear saved preference</button>
      </div>
    </section>}
  </>;
}
