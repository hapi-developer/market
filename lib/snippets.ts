import { Snippet, Review, SellerProfile } from "./types";

export const featuredSnippets: Snippet[] = [
  {
    id: "snip_1",
    title: "Realtime Auth Guard",
    description:
      "Edge-ready middleware that synchronizes session state across tabs and devices.",
    priceCents: 4800,
    currency: "USD",
    language: "TypeScript",
    tags: ["Next.js", "Auth", "Edge"],
    ratingAvg: 4.9,
    ratingCount: 128,
    salesCount: 1280,
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
}`,
    createdAt: "2024-05-10"
  },
  {
    id: "snip_2",
    title: "Stripe Webhook Router",
    description:
      "Typed webhook handler with signature verification and idempotency tooling.",
    priceCents: 6200,
    currency: "USD",
    language: "Node.js",
    tags: ["Stripe", "Webhook", "Billing"],
    ratingAvg: 4.8,
    ratingCount: 92,
    salesCount: 920,
    seller: "Portway",
    licenseType: "Commercial",
    previewCode: `import Stripe from "stripe";

export async function handler(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") ?? "";
  const event = stripe.webhooks.constructEvent(body, signature, WEBHOOK_SECRET);
  return routeEvent(event);
}`,
    createdAt: "2024-06-02"
  },
  {
    id: "snip_3",
    title: "Rate Limit Edge Cache",
    description:
      "Low-latency rate limiter with Redis fallback and adaptive throttling.",
    priceCents: 3400,
    currency: "USD",
    language: "Go",
    tags: ["Rate limiting", "Redis", "Edge"],
    ratingAvg: 4.7,
    ratingCount: 76,
    salesCount: 760,
    seller: "Flux Works",
    licenseType: "Team",
    previewCode: `type Limiter struct {
  Window time.Duration
  Cache  *redis.Client
}

func (l *Limiter) Allow(key string) (bool, error) {
  // increment and evaluate
  return true, nil
}`,
    createdAt: "2024-04-16"
  },
  {
    id: "snip_4",
    title: "AI Prompt Router",
    description:
      "Composable prompt orchestration for multi-model routing and evals.",
    priceCents: 7900,
    currency: "USD",
    language: "Python",
    tags: ["LLM", "Routing", "Evals"],
    ratingAvg: 5.0,
    ratingCount: 54,
    salesCount: 540,
    seller: "Neuralite",
    licenseType: "Enterprise",
    previewCode: `class PromptRouter:
    def __init__(self, models):
        self.models = models

    def route(self, intent):
        return self.models[intent].run()`,
    createdAt: "2024-03-28"
  }
];

export const marketplaceSnippets: Snippet[] = [
  ...featuredSnippets,
  {
    id: "snip_5",
    title: "React Motion Hooks",
    description: "Drop-in animation hooks tuned for micro-interactions.",
    priceCents: 2800,
    currency: "USD",
    language: "React",
    tags: ["Animation", "Hooks", "UI"],
    ratingAvg: 4.6,
    ratingCount: 61,
    salesCount: 660,
    seller: "Halcyon",
    licenseType: "Commercial",
    previewCode: `export const useMotion = () => {
  const [active, setActive] = useState(false);
  return { active, setActive };
};`,
    createdAt: "2024-05-20"
  },
  {
    id: "snip_6",
    title: "Serverless Audit Logger",
    description: "Append-only audit log with tamper detection.",
    priceCents: 5500,
    currency: "USD",
    language: "AWS",
    tags: ["Security", "Logs", "Serverless"],
    ratingAvg: 4.9,
    ratingCount: 44,
    salesCount: 430,
    seller: "Northwind",
    licenseType: "Team",
    previewCode: `export const logEvent = async (payload) => {
  await dynamo.put({ TableName: "audit", Item: payload });
};`,
    createdAt: "2024-04-03"
  },
  {
    id: "snip_7",
    title: "Postgres Queue Worker",
    description: "Reliable job queue with advisory locks and retries.",
    priceCents: 4100,
    currency: "USD",
    language: "PostgreSQL",
    tags: ["Queues", "Jobs", "Database"],
    ratingAvg: 4.8,
    ratingCount: 38,
    salesCount: 390,
    seller: "StackRail",
    licenseType: "Commercial",
    previewCode: `SELECT pg_try_advisory_lock(job_id)
FROM job_queue
WHERE status = 'queued'
ORDER BY created_at ASC
LIMIT 1;`,
    createdAt: "2024-02-11"
  },
  {
    id: "snip_8",
    title: "SaaS Permissions Matrix",
    description: "Role-based access control with cached policy sets.",
    priceCents: 6900,
    currency: "USD",
    language: "TypeScript",
    tags: ["RBAC", "Security", "SaaS"],
    ratingAvg: 4.9,
    ratingCount: 72,
    salesCount: 710,
    seller: "Signal Labs",
    licenseType: "Enterprise",
    previewCode: `export const can = (role, permission) => {
  return policy[role]?.includes(permission) ?? false;
};`,
    createdAt: "2024-03-19"
  },
  {
    id: "snip_9",
    title: "Edge Latency Monitor",
    description: "Synthetic monitoring script with alert fan-out.",
    priceCents: 3600,
    currency: "USD",
    language: "JavaScript",
    tags: ["Monitoring", "Edge", "SLO"],
    ratingAvg: 4.5,
    ratingCount: 29,
    salesCount: 280,
    seller: "Pylon",
    licenseType: "Commercial",
    previewCode: `export async function check(origin) {
  const start = performance.now();
  await fetch(origin);
  return performance.now() - start;
}`,
    createdAt: "2024-01-22"
  },
  {
    id: "snip_10",
    title: "Launch Week Billing Emails",
    description: "Lifecycle email templates with Stripe events baked in.",
    priceCents: 2400,
    currency: "USD",
    language: "Email",
    tags: ["Lifecycle", "Billing", "Email"],
    ratingAvg: 4.4,
    ratingCount: 18,
    salesCount: 190,
    seller: "Northwind",
    licenseType: "Commercial",
    previewCode: `export const paymentSucceeded = ({ customer }) => ({
  subject: "You're live 🎉",
  body: `Thanks ${customer}, your subscription is active.`
});`,
    createdAt: "2024-02-05"
  }
];

export const snippetReviews: Review[] = [
  {
    id: "rev_1",
    author: "Avery Chen",
    rating: 5,
    comment:
      "Saved us days of implementation. Documentation is crisp and updates were fast.",
    createdAt: "2024-06-03"
  },
  {
    id: "rev_2",
    author: "Jordan Patel",
    rating: 4,
    comment: "Loved the code quality and the license clarity. Would buy again.",
    createdAt: "2024-05-18"
  },
  {
    id: "rev_3",
    author: "Mina Okafor",
    rating: 5,
    comment: "Felt enterprise-ready out of the box. Great seller communication.",
    createdAt: "2024-04-22"
  }
];

export const sellerProfiles: SellerProfile[] = [
  {
    username: "signal-labs",
    name: "Signal Labs",
    role: "Security & auth specialists",
    avatarUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=facearea&w=120&h=120",
    rating: 4.9,
    badges: ["Top Seller", "Verified", "Fast Support"],
    stats: [
      { label: "Snippets", value: "18" },
      { label: "Sales", value: "4.8k" },
      { label: "Rating", value: "4.9" }
    ]
  },
  {
    username: "northwind",
    name: "Northwind",
    role: "Infrastructure workflows",
    avatarUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&w=120&h=120",
    rating: 4.7,
    badges: ["Rising", "On-time"],
    stats: [
      { label: "Snippets", value: "11" },
      { label: "Sales", value: "2.1k" },
      { label: "Rating", value: "4.7" }
    ]
  }
];
