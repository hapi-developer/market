import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { formatCurrency, formatDate } from "@/lib/format";
import { marketplaceSnippets, snippetReviews } from "@/lib/snippets";

const licenseOptions = [
  {
    name: "Personal",
    description: "Single developer usage with no redistribution.",
    multiplier: 1
  },
  {
    name: "Commercial",
    description: "Ship in production for one product or client.",
    multiplier: 1.4
  },
  {
    name: "Team",
    description: "Share across up to 10 developers with updates.",
    multiplier: 2
  },
  {
    name: "Enterprise",
    description: "Unlimited seats plus compliance review and SLAs.",
    multiplier: 3
  }
];

export default function SnippetPage({ params }: { params: { id: string } }) {
  const snippet = marketplaceSnippets.find((item) => item.id === params.id);

  if (!snippet) {
    notFound();
  }

  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Snippet</p>
        <h1 className="section-title">{snippet.title}</h1>
        <p>{snippet.description}</p>
      </section>

      <section className="container section">
        <div className="detail-grid">
          <article className="detail-panel">
            <h3>Preview</h3>
            <p className="section-subtitle">Only preview code is visible before purchase.</p>
            <pre className="code-block">
              <code>{snippet.previewCode}</code>
            </pre>
            <div className="snippet-meta">
              <span>{snippet.language}</span>
              <span>{snippet.licenseType} license</span>
            </div>
          </article>
          <article className="detail-panel">
            <h3>Choose license</h3>
            <div className="list-panel" style={{ marginTop: "1rem" }}>
              {licenseOptions.map((option) => (
                <div className="list-item" key={option.name}>
                  <strong>{option.name}</strong>
                  <span className="section-subtitle">{option.description}</span>
                  <span className="section-subtitle">
                    {formatCurrency(snippet.priceCents * option.multiplier)}
                  </span>
                </div>
              ))}
            </div>
            <div className="hero-card-footer">
              <strong>{formatCurrency(snippet.priceCents)}</strong>
              <button className="button button-primary" data-magnetic>
                Buy now
              </button>
            </div>
            <Link className="button button-secondary" href="/marketplace" data-magnetic>
              Back to marketplace
            </Link>
          </article>
          <article className="detail-panel">
            <h3>Seller</h3>
            <p className="section-subtitle">{snippet.seller}</p>
            <div className="snippet-tags">
              {snippet.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="list-panel">
              <div className="list-item">
                <strong>{snippet.ratingAvg} ★</strong>
                <span className="section-subtitle">{snippet.ratingCount} ratings</span>
              </div>
              <div className="list-item">
                <strong>{snippet.salesCount}</strong>
                <span className="section-subtitle">Total sales</span>
              </div>
              <div className="list-item">
                <strong>{formatDate(snippet.createdAt)}</strong>
                <span className="section-subtitle">Last updated</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Reviews</h2>
        <p className="section-subtitle">Verified buyer feedback.</p>
        <div className="data-grid" style={{ marginTop: "1.5rem" }}>
          {snippetReviews.map((review) => (
            <article className="panel" key={review.id}>
              <div className="snippet-meta">
                <span>{review.author}</span>
                <span>{review.rating} ★</span>
              </div>
              <p className="section-subtitle">{review.comment}</p>
              <span className="section-subtitle">{formatDate(review.createdAt)}</span>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
