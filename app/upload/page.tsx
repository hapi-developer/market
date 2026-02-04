import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { authOptions } from "@/lib/auth";

export default async function UploadPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/?auth=signin");
  }

  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Upload</p>
        <h1 className="section-title">Create a new snippet listing</h1>
        <p>
          Add metadata, preview code, and licensing details. Listings are
          reviewed within 24 hours.
        </p>
      </section>

      <section className="container section">
        <div className="form-grid">
          <div className="form-card">
            <h3>Snippet details</h3>
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input id="title" placeholder="Realtime Auth Guard" />
            </div>
            <div className="form-field">
              <label htmlFor="description">Description</label>
              <textarea id="description" rows={4} placeholder="What problem does it solve?" />
            </div>
            <div className="form-field">
              <label htmlFor="language">Language</label>
              <input id="language" placeholder="TypeScript" />
            </div>
            <div className="form-field">
              <label htmlFor="tags">Tags</label>
              <input id="tags" placeholder="Next.js, Auth, Edge" />
            </div>
          </div>
          <div className="form-card">
            <h3>Pricing + license</h3>
            <div className="form-field">
              <label htmlFor="price">Price (USD)</label>
              <input id="price" placeholder="48" />
            </div>
            <div className="form-field">
              <label htmlFor="license">License type</label>
              <select id="license">
                <option>Personal</option>
                <option>Commercial</option>
                <option>Team</option>
                <option>Enterprise</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="preview">Preview code</label>
              <textarea id="preview" rows={6} placeholder="Paste preview-only code" />
            </div>
            <div className="form-field">
              <label htmlFor="full">Full code (encrypted)</label>
              <textarea id="full" rows={6} placeholder="Full snippet code" />
            </div>
          </div>
        </div>
        <div className="hero-actions" style={{ marginTop: "2rem" }}>
          <button className="button button-primary" data-magnetic>
            Submit for review
          </button>
          <button className="button button-secondary" data-magnetic>
            Save draft
          </button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
