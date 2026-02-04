import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { marketplaceSnippets } from "@/lib/snippets";

export default function MarketplacePage() {
  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <h1 className="section-title">Marketplace</h1>
        <p>
          Discover production-ready snippets, validated licenses, and trusted
          creators. Filter by stack, price, and rating.
        </p>
        <div className="filter-bar">
          {[
            "All",
            "TypeScript",
            "Python",
            "Go",
            "Security",
            "UI",
            "Billing"
          ].map((filter) => (
            <span className="filter-pill" key={filter}>
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="data-grid">
          {marketplaceSnippets.map((snippet) => (
            <article className="panel" key={snippet.id}>
              <div className="snippet-meta">
                <span>{snippet.language}</span>
                <span>${snippet.price}</span>
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
                <span>{snippet.rating} ★</span>
                <span>{snippet.purchases} purchases</span>
              </div>
              <Link
                className="button button-secondary"
                href={`/snippet/${snippet.id}`}
                data-magnetic
              >
                View snippet
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
