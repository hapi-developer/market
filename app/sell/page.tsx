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
      </section>

      <section className="container section">
        <div className="data-grid">
          <article className="panel">
            <h3>Why sell on CodeMarket</h3>
            <ul className="section-subtitle" style={{ paddingLeft: "1rem" }}>
              <li>Instant licensing with compliance automation.</li>
              <li>Promotion engine tailored to developer demand.</li>
              <li>Analytics dashboards with revenue forecasts.</li>
            </ul>
            <button className="button button-primary" data-magnetic>
              Upload snippet
            </button>
          </article>
          <article className="panel">
            <h3>Starter checklist</h3>
            <p className="section-subtitle">Complete these steps to go live.</p>
            <div className="cta-steps">
              {[
                "Create seller profile",
                "Upload first snippet",
                "Publish pricing tiers"
              ].map((item) => (
                <div className="cta-step" key={item}>
                  <strong>●</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
