import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">CodeMarket</div>
          <p>
            Premium infrastructure for buying, selling, and licensing production-
            ready code snippets.
          </p>
        </div>
        <div>
          <strong>Platform</strong>
          <div className="footer-grid" style={{ marginTop: "1rem" }}>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div>
          <strong>Community</strong>
          <div className="footer-grid" style={{ marginTop: "1rem" }}>
            <Link href="/library">Library</Link>
            <Link href="/marketplace">Collections</Link>
            <Link href="/">Updates</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
