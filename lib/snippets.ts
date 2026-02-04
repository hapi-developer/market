import { Snippet, Review } from "./types";

export const featuredSnippets: Snippet[] = [
  {
    id: "snip_1",
    title: "Realtime Auth Guard",
    description:
      "Edge-ready middleware that synchronizes session state across tabs and devices.",
    price: 48,
    language: "TypeScript",
    tags: ["Next.js", "Auth", "Edge"],
    rating: 4.9,
    purchases: 1280,
    seller: "Signal Labs",
    licenseType: "Commercial",
    previewCode: `import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const session = cookies().get("session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.next();
}`
  },
  {
    id: "snip_2",
    title: "Stripe Webhook Router",
    description:
      "Typed webhook handler with signature verification and idempotency tooling.",
    price: 62,
    language: "Node.js",
    tags: ["Stripe", "Webhook", "Billing"],
    rating: 4.8,
    purchases: 920,
    seller: "Portway",
    licenseType: "Commercial",
    previewCode: `import Stripe from "stripe";

export async function handler(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") ?? "";
  const event = stripe.webhooks.constructEvent(body, signature, WEBHOOK_SECRET);
  return routeEvent(event);
}`
  },
  {
    id: "snip_3",
    title: "Rate Limit Edge Cache",
    description:
      "Low-latency rate limiter with Redis fallback and adaptive throttling.",
    price: 34,
    language: "Go",
    tags: ["Rate limiting", "Redis", "Edge"],
    rating: 4.7,
    purchases: 760,
    seller: "Flux Works",
    licenseType: "Team",
    previewCode: `type Limiter struct {
  Window time.Duration
  Cache  *redis.Client
}

func (l *Limiter) Allow(key string) (bool, error) {
  // increment and evaluate
  return true, nil
}`
  },
  {
    id: "snip_4",
    title: "AI Prompt Router",
    description:
      "Composable prompt orchestration for multi-model routing and evals.",
    price: 79,
    language: "Python",
    tags: ["LLM", "Routing", "Evals"],
    rating: 5.0,
    purchases: 540,
    seller: "Neuralite",
    licenseType: "Enterprise",
    previewCode: `class PromptRouter:
    def __init__(self, models):
        self.models = models

    def route(self, intent):
        return self.models[intent].run()`
  }
];

export const marketplaceSnippets: Snippet[] = [
  ...featuredSnippets,
  {
    id: "snip_5",
    title: "React Motion Hooks",
    description: "Drop-in animation hooks tuned for micro-interactions.",
    price: 28,
    language: "React",
    tags: ["Animation", "Hooks", "UI"],
    rating: 4.6,
    purchases: 660,
    seller: "Halcyon",
    licenseType: "Commercial",
    previewCode: `export const useMotion = () => {
  const [active, setActive] = useState(false);
  return { active, setActive };
};`
  },
  {
    id: "snip_6",
    title: "Serverless Audit Logger",
    description: "Append-only audit log with tamper detection.",
    price: 55,
    language: "AWS",
    tags: ["Security", "Logs", "Serverless"],
    rating: 4.9,
    purchases: 430,
    seller: "Northwind",
    licenseType: "Team",
    previewCode: `export const logEvent = async (payload) => {
  await dynamo.put({ TableName: "audit", Item: payload });
};`
  }
];

export const snippetReviews: Review[] = [
  {
    id: "rev_1",
    author: "Avery Chen",
    rating: 5,
    comment:
      "Saved us days of implementation. Documentation is crisp and updates were fast."
  },
  {
    id: "rev_2",
    author: "Jordan Patel",
    rating: 4,
    comment:
      "Loved the code quality and the license clarity. Would buy again."
  },
  {
    id: "rev_3",
    author: "Mina Okafor",
    rating: 5,
    comment:
      "Felt enterprise-ready out of the box. Great seller communication."
  }
];
