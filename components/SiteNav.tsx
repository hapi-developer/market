import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">CodeMarket</div>
        <nav className="nav-links">
          <Link className="nav-link" href="/marketplace">
            Marketplace
          </Link>
          <Link className="nav-link" href="/sell">
            Sell
          </Link>
          <Link className="nav-link" href="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" href="/library">
            Library
          </Link>
        </nav>
        <div className="nav-actions">
          <button className="button button-ghost" data-magnetic>
            Sign in
          </button>
          <button className="button button-primary" data-magnetic>
            Start selling
          </button>
        </div>
      </div>
    </header>
  );
}
