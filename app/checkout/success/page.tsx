import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function CheckoutSuccessPage() {
  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Checkout</p>
        <h1 className="section-title">Purchase successful</h1>
        <p>
          Your license is ready. Access your snippet instantly in your library
          or download the receipt.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/library" data-magnetic>
            Go to library
          </Link>
          <Link className="button button-secondary" href="/marketplace" data-magnetic>
            Continue browsing
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
