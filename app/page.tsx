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
      <div className="noise-layer" />

      <section className="hero container">
        <div className="hero-grid">
          <div className="reveal">
            <p className="hero-eyebrow">SnippetMarket</p>
            <h1>
              The premium marketplace for vetted, licensable code snippets.
            </h1>
            <p>
              Upload, license, and sell production-ready building blocks with
              enterprise trust. Buyers get clean previews, verified licenses,
              and fast checkout.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" data-magnetic>
                Explore snippets
              </button>
              <button className="button button-secondary" data-magnetic>
                View seller playbook
              </button>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <strong>18k+</strong>
                <span>Snippets vetted</span>
              </div>
              <div className="metric">
                <strong>$4.8M</strong>
                <span>Payouts to devs</span>
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
                Edge-ready middleware with audit logs, session replay, and
                compliance hooks.
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
            <span className="suggestion">React motion hook</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="reveal">
          <h2 className="section-title">Live marketplace preview</h2>
          <p className="section-subtitle">
            Browse curated snippets with verified licenses, clean previews, and
            instant checkout.
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
            Curated quality reviews, licensing clarity, and developer payouts
            trusted by top product teams.
          </p>
        </div>
        <div className="trust-strip">
          {[
            { label: "Snippets sold", value: 12840, suffix: "+" },
            { label: "Payouts to devs", value: 4800000, suffix: "+" },
            { label: "Average rating", value: 49, suffix: "/50" },
            { label: "Hours saved", value: 96000, suffix: "+" }
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
              {[
                "Upload verified snippets",
                "Choose license tiers",
                "Earn recurring revenue"
              ].map((step, index) => (
                <div className="cta-step" key={step}>
                  <strong>0{index + 1}</strong>
                  <span>{step}</span>
                </div>
              ))}
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

      <section className="section container">
        <div className="reveal">
          <h2 className="section-title">FAQ</h2>
          <p className="section-subtitle">
            Everything you need to know before you launch or buy your next
            snippet.
          </p>
        </div>
        <div className="data-grid" style={{ marginTop: "2rem" }}>
          {[
            {
              title: "How are snippets reviewed?",
              body: "Each snippet runs through automated checks plus a manual quality review for security, tests, and documentation."
            },
            {
              title: "What licensing options are available?",
              body: "Offer personal, commercial, team, or enterprise licenses with clear usage rules and audit logs."
            },
            {
              title: "How do payouts work?",
              body: "Payouts are issued weekly with downloadable invoices, tax handling, and refund protection."
            }
          ].map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p className="section-subtitle">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
