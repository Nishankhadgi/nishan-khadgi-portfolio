import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#10120f", color: "#eff1e7", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 560, textAlign: "center" }}>
        <p style={{ color: "#c7ff46", fontFamily: "monospace", letterSpacing: ".18em" }}>404 / SIGNAL NOT FOUND</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: .98 }}>This path is<br />off the map.</h1>
        <p style={{ color: "#a4aa9c", lineHeight: 1.7 }}>The page you requested is unavailable. Return to the portfolio and continue exploring.</p>
        <Link href="/" style={{ display: "inline-block", marginTop: 18, padding: "13px 17px", background: "#c7ff46", color: "#10120f", textDecoration: "none", fontWeight: 700 }}>Return to portfolio ↗</Link>
      </div>
    </main>
  );
}
