import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

const tiers = [
  {
    name: "Personal",
    description: "Single developer usage for prototypes or internal tools.",
    includes: ["1 seat", "Private repos", "Email support"]
  },
  {
    name: "Commercial",
    description: "Ship the snippet inside one production product or client project.",
    includes: ["1 product", "Security updates", "Versioned releases"]
  },
  {
    name: "Team",
    description: "Share across up to 10 developers with managed updates.",
    includes: ["10 seats", "Priority support", "Update notifications"]
  },
  {
    name: "Enterprise",
    description: "Unlimited seats, compliance review, and custom legal terms.",
    includes: ["Unlimited seats", "SLA", "Security questionnaire"]
  }
];

export default function LicensingPage() {
  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Licensing</p>
        <h1 className="section-title">Clear, developer-friendly licenses.</h1>
        <p>
          Every snippet includes a license summary, usage policy, and update
          timeline. Upgrade licenses anytime.
        </p>
      </section>

      <section className="container section">
        <div className="data-grid">
          {tiers.map((tier) => (
            <article className="panel" key={tier.name}>
              <h3>{tier.name}</h3>
              <p className="section-subtitle">{tier.description}</p>
              <ul className="section-subtitle" style={{ paddingLeft: "1rem" }}>
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="seller-cta">
          <div>
            <h2 className="section-title">Need a custom license?</h2>
            <p className="section-subtitle">
              Enterprise buyers can request legal reviews and add custom clauses
              for regulated industries.
            </p>
          </div>
          <button className="button button-primary" data-magnetic>
            Contact licensing team
          </button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
