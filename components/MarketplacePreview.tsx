"use client";

import { useState } from "react";

import { featuredSnippets } from "@/lib/snippets";
import type { Snippet } from "@/lib/types";

export default function MarketplacePreview() {
  const [activeSnippet, setActiveSnippet] = useState<Snippet | null>(null);

  return (
    <div className="marketplace-preview">
      <div className="snippet-grid">
        {featuredSnippets.map((snippet) => (
          <article className="snippet-card" key={snippet.id}>
            <div className="snippet-meta">
              <span>{snippet.language}</span>
              <span>${snippet.price}</span>
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
                {snippet.rating} ★ · {snippet.purchases} purchases
              </span>
            </div>
            <div className="actions">
              <button
                className="button button-secondary"
                data-magnetic
                onClick={() => setActiveSnippet(snippet)}
              >
                Preview snippet
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
              <span>${activeSnippet.price} · {activeSnippet.language}</span>
            </div>
            <pre>
              <code>{activeSnippet.previewCode}</code>
            </pre>
            <button
              className="button button-primary"
              data-magnetic
              onClick={() => {
                navigator.clipboard.writeText(activeSnippet.previewCode);
              }}
            >
              Copy snippet
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
