import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { authOptions } from "@/lib/auth";
import { marketplaceSnippets } from "@/lib/snippets";

export default async function LibraryPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/?auth=signin");
  }

  return (
    <main>
      <SiteNav />
      <section className="container page-hero">
        <p className="hero-eyebrow">Library</p>
        <h1 className="section-title">Your purchased snippets</h1>
        <p>
          Organize, search, and export everything you have licensed across your
          team.
        </p>
      </section>

      <section className="container section">
        <div className="data-grid">
          {marketplaceSnippets.slice(0, 4).map((snippet) => (
            <article className="panel" key={snippet.id}>
              <div className="snippet-meta">
                <span>{snippet.language}</span>
                <span>{snippet.licenseType}</span>
              </div>
              <h3>{snippet.title}</h3>
              <p className="section-subtitle">{snippet.description}</p>
              <button className="button button-secondary" data-magnetic>
                Open snippet
              </button>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
