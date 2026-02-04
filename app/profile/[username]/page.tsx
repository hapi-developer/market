import { notFound } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { formatCurrency } from "@/lib/format";
import { marketplaceSnippets, sellerProfiles } from "@/lib/snippets";

export default function ProfilePage({ params }: { params: { username: string } }) {
  const profile = sellerProfiles.find(
    (seller) => seller.username === params.username
  );

  if (!profile) {
    notFound();
  }

  const sellerSnippets = marketplaceSnippets.filter(
    (snippet) => snippet.seller.toLowerCase().replace(/\s+/g, "-") === params.username
  );

  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Seller profile</p>
        <h1 className="section-title">{profile.name}</h1>
        <p>{profile.role}</p>
        <div className="filter-bar">
          {profile.badges.map((badge) => (
            <span className="filter-pill" key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <div className="trust-strip" style={{ marginTop: "2rem" }}>
          {profile.stats.map((stat) => (
            <div className="trust-card" key={stat.label}>
              <div className="count-up">{stat.value}</div>
              <p className="section-subtitle">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Listings</h2>
        <div className="data-grid" style={{ marginTop: "2rem" }}>
          {sellerSnippets.map((snippet) => (
            <article className="panel" key={snippet.id}>
              <div className="snippet-meta">
                <span>{snippet.language}</span>
                <span>{formatCurrency(snippet.priceCents)}</span>
              </div>
              <h3>{snippet.title}</h3>
              <p className="section-subtitle">{snippet.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
