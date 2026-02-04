import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">SnippetMarket</div>
          <p>
            Premium infrastructure for buying, selling, and licensing
            production-ready code snippets.
          </p>
        </div>
        <div>
          <strong>Platform</strong>
          <div className="footer-grid" style={{ marginTop: "1rem" }}>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/upload">Upload</Link>
          </div>
        </div>
        <div>
          <strong>Resources</strong>
          <div className="footer-grid" style={{ marginTop: "1rem" }}>
            <Link href="/library">Library</Link>
            <Link href="/docs/licensing">Licensing</Link>
            <Link href="/profile/signal-labs">Seller profiles</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
