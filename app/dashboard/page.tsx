import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { authOptions } from "@/lib/auth";
import { formatCurrency } from "@/lib/format";
import { marketplaceSnippets } from "@/lib/snippets";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/?auth=signin");
  }

  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Dashboard</p>
        <h1 className="section-title">Seller performance</h1>
        <p>
          Track revenue, downloads, and product ratings across your snippet
          catalog.
        </p>
      </section>

      <section className="container section">
        <div className="kpi-grid">
          <article className="kpi-card">
            <p className="section-subtitle">Revenue</p>
            <strong>$48,920</strong>
            <p className="section-subtitle">+22% vs last month</p>
          </article>
          <article className="kpi-card">
            <p className="section-subtitle">Snippets</p>
            <strong>18</strong>
            <p className="section-subtitle">3 drafts ready to publish</p>
          </article>
          <article className="kpi-card">
            <p className="section-subtitle">Downloads</p>
            <strong>6,420</strong>
            <p className="section-subtitle">98% success rate</p>
          </article>
          <article className="kpi-card">
            <p className="section-subtitle">Ratings</p>
            <strong>4.9 ★</strong>
            <p className="section-subtitle">120 verified reviews</p>
          </article>
        </div>

        <div className="section-title" style={{ marginTop: "2rem" }}>
          Your snippets
        </div>
        <div className="list-panel" style={{ marginTop: "1rem" }}>
          {marketplaceSnippets.slice(0, 4).map((snippet) => (
            <div className="list-item" key={snippet.id}>
              <strong>{snippet.title}</strong>
              <span className="section-subtitle">{snippet.language}</span>
              <span className="section-subtitle">
                {formatCurrency(snippet.priceCents)} · {snippet.salesCount} sales
              </span>
              <div className="actions">
                <button className="button button-ghost" data-magnetic>
                  Edit
                </button>
                <button className="button button-secondary" data-magnetic>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
