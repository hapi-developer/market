import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { formatCurrency } from "@/lib/format";
import { marketplaceSnippets } from "@/lib/snippets";

const filters = [
  "TypeScript",
  "Python",
  "Go",
  "Security",
  "UI",
  "Billing",
  "Infrastructure"
];

const sorts = ["Trending", "Top rated", "Newest", "Best value"];

export default function MarketplacePage() {
  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Marketplace</p>
        <h1 className="section-title">Discover vetted snippets</h1>
        <p>
          Search, filter, and preview code from trusted sellers. Every listing
          includes license clarity and update history.
        </p>
        <div className="search-panel" style={{ marginTop: "2rem" }}>
          <input className="search-input" placeholder="Search by tag, stack, or workflow" />
          <div className="search-suggestions">
            <span className="suggestion">Auth</span>
            <span className="suggestion">Stripe</span>
            <span className="suggestion">Edge</span>
            <span className="suggestion">RBAC</span>
          </div>
        </div>
        <div className="filter-bar">
          {filters.map((filter) => (
            <span className="filter-pill" key={filter}>
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="filter-bar" style={{ justifyContent: "space-between" }}>
          <div className="filter-bar">
            <span className="filter-pill">All licenses</span>
            <span className="filter-pill">Under $75</span>
            <span className="filter-pill">4.5★+</span>
          </div>
          <div className="filter-bar">
            {sorts.map((sort) => (
              <span className="filter-pill" key={sort}>
                {sort}
              </span>
            ))}
          </div>
        </div>
        <div className="data-grid" style={{ marginTop: "2rem" }}>
          {marketplaceSnippets.map((snippet) => (
            <article className="panel" key={snippet.id}>
              <div className="snippet-meta">
                <span>{snippet.language}</span>
                <span>{formatCurrency(snippet.priceCents)}</span>
              </div>
              <h3>{snippet.title}</h3>
              <p className="section-subtitle">{snippet.description}</p>
              <div className="snippet-tags">
                {snippet.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="snippet-meta">
                <span>{snippet.ratingAvg} ★</span>
                <span>{snippet.salesCount} sales</span>
              </div>
              <div className="actions">
                <Link className="button button-secondary" href={`/snippet/${snippet.id}`} data-magnetic>
                  View snippet
                </Link>
                <button className="button button-ghost" data-magnetic>
                  Save
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
