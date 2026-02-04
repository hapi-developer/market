"use client";

import { useState } from "react";

import { featuredSnippets } from "@/lib/snippets";
import type { Snippet } from "@/lib/types";
import { formatCurrency } from "@/lib/format";

export default function MarketplacePreview() {
  const [activeSnippet, setActiveSnippet] = useState<Snippet | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="marketplace-preview">
      <div className="snippet-grid">
        {featuredSnippets.map((snippet) => (
          <article className="snippet-card" key={snippet.id}>
            <div className="snippet-meta">
              <span>{snippet.language}</span>
              <span>{formatCurrency(snippet.priceCents)}</span>
            </div>
            <h3>{snippet.title}</h3>
            <p className="section-subtitle">{snippet.description}</p>
            <div className="snippet-tags">
              {snippet.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="snippet-meta">
              <span>{snippet.seller}</span>
              <span>
                {snippet.ratingAvg} ★ · {snippet.salesCount} sales
              </span>
            </div>
            <div className="action-bar">
              <button
                className="button button-secondary"
                data-magnetic
                onClick={() => setActiveSnippet(snippet)}
              >
                Preview
              </button>
              <button className="button button-ghost" data-magnetic>
                Save
              </button>
              <button className="button button-ghost" data-magnetic>
                View
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeSnippet ? (
        <div className="modal-overlay" onClick={() => setActiveSnippet(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>{activeSnippet.title}</h3>
                <p className="section-subtitle">{activeSnippet.description}</p>
              </div>
              <button
                className="button button-ghost"
                data-magnetic
                onClick={() => setActiveSnippet(null)}
              >
                Close
              </button>
            </div>
            <div className="snippet-meta">
              <span>{activeSnippet.licenseType} license</span>
              <span>
                {formatCurrency(activeSnippet.priceCents)} · {activeSnippet.language}
              </span>
            </div>
            <div className="detail-grid" style={{ marginTop: "1rem" }}>
              <div className="detail-panel">
                <h4>Preview code</h4>
                <pre className="code-block">
                  <code>{activeSnippet.previewCode}</code>
                </pre>
                <button
                  className="button button-primary"
                  data-magnetic
                  onClick={() => handleCopy(activeSnippet.previewCode)}
                >
                  {copied ? "Copied" : "Copy snippet"}
                </button>
              </div>
              <div className="detail-panel">
                <h4>License summary</h4>
                <ul className="section-subtitle" style={{ paddingLeft: "1rem" }}>
                  <li>Commercial usage allowed for shipped products.</li>
                  <li>Includes updates and versioned releases.</li>
                  <li>No redistribution of full source without a team license.</li>
                </ul>
                <div className="hero-card-footer">
                  <strong>{formatCurrency(activeSnippet.priceCents)}</strong>
                  <button className="button button-secondary" data-magnetic>
                    Buy license
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
