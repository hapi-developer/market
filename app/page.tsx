import CursorGlow from "@/components/CursorGlow";
import MarketplacePreview from "@/components/MarketplacePreview";
import MotionProvider from "@/components/MotionProvider";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function HomePage() {
  return (
    <main>
      <SiteNav />
      <CursorGlow />
      <MotionProvider />
      <div className="background-layer" />
      <div className="floating-code">
        <span>{"const checkout = await"}</span>
        <span>{"license: \"commercial\""}</span>
        <span>{"snippet.preview()"}</span>
      </div>

      <section className="hero container">
        <div className="hero-grid">
          <div className="reveal">
            <p className="hero-eyebrow">Developer code marketplace</p>
            <h1>
              Upload, license, and sell premium code snippets with the polish of
              a top-tier SaaS.
            </h1>
            <p>
              CodeMarket is the Stripe + Gumroad for developers. Build
              reputation, earn recurring income, and ship production-ready
              building blocks in minutes.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" data-magnetic>
                Explore snippets
              </button>
              <button className="button button-secondary" data-magnetic>
                View live demo
              </button>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <strong>12k+</strong>
                <span>Snippets live</span>
              </div>
              <div className="metric">
                <strong>$2.1M</strong>
                <span>Paid to developers</span>
              </div>
              <div className="metric">
                <strong>4.9★</strong>
                <span>Average rating</span>
              </div>
            </div>
          </div>
          <div className="hero-panel reveal" data-parallax>
            <div className="hero-card">
              <span className="badge">Trending snippet</span>
              <strong>Realtime Auth Guard</strong>
              <p className="section-subtitle">
                Edge-ready middleware with audit logs, session replay, and built-
                in compliance hooks.
              </p>
              <div className="hero-card-footer">
                <strong>$48</strong>
                <button className="button button-primary" data-magnetic>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="hero-card">
              <span className="badge">Seller spotlight</span>
              <strong>Signal Labs</strong>
              <p className="section-subtitle">
                1,240 purchases · 98% satisfaction · Automated update pipeline.
              </p>
              <button className="button button-secondary" data-magnetic>
                Follow seller
              </button>
            </div>
          </div>
        </div>
        <div className="search-panel reveal">
          <input
            className="search-input"
            placeholder="Search snippets, stacks, or workflows"
          />
          <div className="search-suggestions">
            <span className="suggestion">Next.js auth</span>
            <span className="suggestion">Stripe webhook handler</span>
            <span className="suggestion">Rate limiter</span>
            <span className="suggestion">React animation hook</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="reveal">
          <h2 className="section-title">Live marketplace preview</h2>
          <p className="section-subtitle">
            Browse high-signal snippets with verified licenses, production-ready
            code previews, and instant checkout.
          </p>
        </div>
        <div className="reveal" style={{ marginTop: "2rem" }}>
          <MarketplacePreview />
        </div>
      </section>

      <section className="section container">
        <div className="reveal">
          <h2 className="section-title">Trust built into every transaction</h2>
          <p className="section-subtitle">
            Proven security reviews, transparent licensing, and payouts trusted
            by elite engineering teams.
          </p>
        </div>
        <div className="trust-strip">
          {[
            { label: "Snippets sold", value: 12000, suffix: "+" },
            { label: "Paid to developers", value: 2000000, suffix: "+" },
            { label: "Top startup adoption", value: 320, suffix: "+" }
          ].map((item) => (
            <div className="trust-card reveal" key={item.label}>
              <div
                className="count-up"
                data-count
                data-target={item.value}
                data-suffix={item.suffix}
              >
                0
              </div>
              <p className="section-subtitle">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="seller-cta reveal">
          <div>
            <h2 className="section-title">Turn your code into an income stream.</h2>
            <p className="section-subtitle">
              Build a premium storefront, set tiered licenses, and launch new
              snippets in minutes. We handle checkout, tax, and delivery.
            </p>
            <div className="cta-steps">
              {["Upload verified snippets", "Choose license tiers", "Earn recurring revenue"].map(
                (step, index) => (
                  <div className="cta-step" key={step}>
                    <strong>0{index + 1}</strong>
                    <span>{step}</span>
                  </div>
                )
              )}
            </div>
            <button className="button button-primary" data-magnetic>
              Start selling today
            </button>
          </div>
          <div className="earnings-panel">
            <strong>Monthly earnings</strong>
            <div className="chart">
              {[72, 84, 66, 90].map((value, index) => (
                <div className="chart-row" key={`row-${index}`}>
                  <span className="section-subtitle">Week {index + 1}</span>
                  <div className="chart-bar">
                    <span style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-card-footer">
              <strong>$24,780</strong>
              <span className="section-subtitle">Projected next payout</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
