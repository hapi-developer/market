import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function CheckoutCancelPage() {
  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Checkout</p>
        <h1 className="section-title">Checkout canceled</h1>
        <p>Need more time? Your cart is saved for 24 hours.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/marketplace" data-magnetic>
            Back to marketplace
          </Link>
          <Link className="button button-secondary" href="/library" data-magnetic>
            View library
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
