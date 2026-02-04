import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { authOptions } from "@/lib/auth";

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
        <div className="data-grid">
          <article className="panel">
            <h3>Revenue</h3>
            <strong>$48,920</strong>
            <p className="section-subtitle">+22% vs last month</p>
          </article>
          <article className="panel">
            <h3>Snippets</h3>
            <strong>18</strong>
            <p className="section-subtitle">3 new drafts ready to publish</p>
          </article>
          <article className="panel">
            <h3>Downloads</h3>
            <strong>6,420</strong>
            <p className="section-subtitle">98% success rate</p>
          </article>
          <article className="panel">
            <h3>Ratings</h3>
            <strong>4.9 ★</strong>
            <p className="section-subtitle">120 verified reviews</p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
