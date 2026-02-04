import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function SellPage() {
  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Sell</p>
        <h1 className="section-title">Launch your snippet storefront.</h1>
        <p>
          Upload verified code, configure licensing, and activate instant
          payouts. Build reputation and recurring revenue from day one.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/upload" data-magnetic>
            Upload a snippet
          </Link>
          <Link className="button button-secondary" href="/docs/licensing" data-magnetic>
            Review licensing
          </Link>
        </div>
      </section>

      <section className="container section">
        <div className="data-grid">
          <article className="panel">
            <h3>Why sell on SnippetMarket</h3>
            <ul className="section-subtitle" style={{ paddingLeft: "1rem" }}>
              <li>Instant licensing with compliance automation.</li>
              <li>Promotion engine tailored to developer demand.</li>
              <li>Analytics dashboards with revenue forecasts.</li>
            </ul>
          </article>
          <article className="panel">
            <h3>Seller onboarding</h3>
            <p className="section-subtitle">Complete these steps to go live.</p>
            <div className="cta-steps">
              {[
                "Create seller profile",
                "Upload first snippet",
                "Publish pricing tiers"
              ].map((item, index) => (
                <div className="cta-step" key={item}>
                  <strong>0{index + 1}</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="panel">
            <h3>Seller toolkit</h3>
            <p className="section-subtitle">
              Pre-built marketing emails, launch sequences, and update
              automation.
            </p>
            <div className="hero-card-footer">
              <strong>Next payout</strong>
              <span className="section-subtitle">Every Friday</span>
            </div>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
