import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { marketplaceSnippets, snippetReviews } from "@/lib/snippets";

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
        <div className="data-grid">
          <article className="panel">
            <h3>Preview</h3>
            <pre>
              <code>{snippet.previewCode}</code>
            </pre>
            <div className="snippet-meta">
              <span>{snippet.language}</span>
              <span>{snippet.licenseType} license</span>
            </div>
          </article>
          <article className="panel">
            <h3>Seller</h3>
            <p className="section-subtitle">{snippet.seller}</p>
            <div className="snippet-tags">
              {snippet.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-card-footer">
              <strong>${snippet.price}</strong>
              <button className="button button-primary" data-magnetic>
                Buy now
              </button>
            </div>
            <Link className="button button-secondary" href="/marketplace" data-magnetic>
              Back to marketplace
            </Link>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Reviews</h2>
        <div className="data-grid">
          {snippetReviews.map((review) => (
            <article className="panel" key={review.id}>
              <div className="snippet-meta">
                <span>{review.author}</span>
                <span>{review.rating} ★</span>
              </div>
              <p className="section-subtitle">{review.comment}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
