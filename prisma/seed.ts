import { PrismaClient, LicenseType, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.savedSnippet.deleteMany();
  await prisma.purchase.deleteMany();
  await prisma.snippet.deleteMany();
  await prisma.user.deleteMany();

  const sellerA = await prisma.user.create({
    data: {
      email: "signal@snippetmarket.dev",
      username: "signal-labs",
      avatarUrl:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=facearea&w=120&h=120",
      role: UserRole.seller
    }
  });

  const sellerB = await prisma.user.create({
    data: {
      email: "northwind@snippetmarket.dev",
      username: "northwind",
      avatarUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&w=120&h=120",
      role: UserRole.seller
    }
  });

  const buyer = await prisma.user.create({
    data: {
      email: "buyer@snippetmarket.dev",
      username: "buyer",
      role: UserRole.buyer
    }
  });

  const snippets = await prisma.snippet.createMany({
    data: [
      {
        title: "Realtime Auth Guard",
        description:
          "Edge-ready middleware that synchronizes session state across tabs and devices.",
        language: "TypeScript",
        tags: ["Next.js", "Auth", "Edge"],
        priceCents: 4800,
        currency: "USD",
        licenseType: LicenseType.commercial,
        previewCode: "export const auth = () => true;",
        fullCode: "// encrypted full code",
        sellerId: sellerA.id,
        ratingAvg: 4.9,
        ratingCount: 128,
        salesCount: 1280
      },
      {
        title: "Stripe Webhook Router",
        description:
          "Typed webhook handler with signature verification and idempotency tooling.",
        language: "Node.js",
        tags: ["Stripe", "Webhook", "Billing"],
        priceCents: 6200,
        currency: "USD",
        licenseType: LicenseType.commercial,
        previewCode: "export const handler = () => {};",
        fullCode: "// encrypted full code",
        sellerId: sellerA.id,
        ratingAvg: 4.8,
        ratingCount: 92,
        salesCount: 920
      },
      {
        title: "Rate Limit Edge Cache",
        description:
          "Low-latency rate limiter with Redis fallback and adaptive throttling.",
        language: "Go",
        tags: ["Rate limiting", "Redis", "Edge"],
        priceCents: 3400,
        currency: "USD",
        licenseType: LicenseType.team,
        previewCode: "type Limiter struct {}",
        fullCode: "// encrypted full code",
        sellerId: sellerA.id,
        ratingAvg: 4.7,
        ratingCount: 76,
        salesCount: 760
      },
      {
        title: "AI Prompt Router",
        description:
          "Composable prompt orchestration for multi-model routing and evals.",
        language: "Python",
        tags: ["LLM", "Routing", "Evals"],
        priceCents: 7900,
        currency: "USD",
        licenseType: LicenseType.enterprise,
        previewCode: "class PromptRouter: pass",
        fullCode: "// encrypted full code",
        sellerId: sellerB.id,
        ratingAvg: 5,
        ratingCount: 54,
        salesCount: 540
      },
      {
        title: "React Motion Hooks",
        description: "Drop-in animation hooks tuned for micro-interactions.",
        language: "React",
        tags: ["Animation", "Hooks", "UI"],
        priceCents: 2800,
        currency: "USD",
        licenseType: LicenseType.commercial,
        previewCode: "export const useMotion = () => {};",
        fullCode: "// encrypted full code",
        sellerId: sellerB.id,
        ratingAvg: 4.6,
        ratingCount: 61,
        salesCount: 660
      },
      {
        title: "Serverless Audit Logger",
        description: "Append-only audit log with tamper detection.",
        language: "AWS",
        tags: ["Security", "Logs", "Serverless"],
        priceCents: 5500,
        currency: "USD",
        licenseType: LicenseType.team,
        previewCode: "export const logEvent = () => {};",
        fullCode: "// encrypted full code",
        sellerId: sellerB.id,
        ratingAvg: 4.9,
        ratingCount: 44,
        salesCount: 430
      },
      {
        title: "Postgres Queue Worker",
        description: "Reliable job queue with advisory locks and retries.",
        language: "PostgreSQL",
        tags: ["Queues", "Jobs", "Database"],
        priceCents: 4100,
        currency: "USD",
        licenseType: LicenseType.commercial,
        previewCode: "SELECT pg_try_advisory_lock(job_id);",
        fullCode: "// encrypted full code",
        sellerId: sellerA.id,
        ratingAvg: 4.8,
        ratingCount: 38,
        salesCount: 390
      },
      {
        title: "SaaS Permissions Matrix",
        description: "Role-based access control with cached policy sets.",
        language: "TypeScript",
        tags: ["RBAC", "Security", "SaaS"],
        priceCents: 6900,
        currency: "USD",
        licenseType: LicenseType.enterprise,
        previewCode: "export const can = () => true;",
        fullCode: "// encrypted full code",
        sellerId: sellerA.id,
        ratingAvg: 4.9,
        ratingCount: 72,
        salesCount: 710
      },
      {
        title: "Edge Latency Monitor",
        description: "Synthetic monitoring script with alert fan-out.",
        language: "JavaScript",
        tags: ["Monitoring", "Edge", "SLO"],
        priceCents: 3600,
        currency: "USD",
        licenseType: LicenseType.commercial,
        previewCode: "export async function check() {};",
        fullCode: "// encrypted full code",
        sellerId: sellerB.id,
        ratingAvg: 4.5,
        ratingCount: 29,
        salesCount: 280
      },
      {
        title: "Launch Week Billing Emails",
        description: "Lifecycle email templates with Stripe events baked in.",
        language: "Email",
        tags: ["Lifecycle", "Billing", "Email"],
        priceCents: 2400,
        currency: "USD",
        licenseType: LicenseType.commercial,
        previewCode: "export const paymentSucceeded = () => {};",
        fullCode: "// encrypted full code",
        sellerId: sellerB.id,
        ratingAvg: 4.4,
        ratingCount: 18,
        salesCount: 190
      }
    ]
  });

  const snippetList = await prisma.snippet.findMany();

  await prisma.review.createMany({
    data: [
      {
        rating: 5,
        comment:
          "Saved us days of implementation. Documentation is crisp and updates were fast.",
        snippetId: snippetList[0].id,
        userId: buyer.id
      },
      {
        rating: 4,
        comment: "Loved the code quality and the license clarity. Would buy again.",
        snippetId: snippetList[1].id,
        userId: buyer.id
      },
      {
        rating: 5,
        comment: "Felt enterprise-ready out of the box. Great seller communication.",
        snippetId: snippetList[2].id,
        userId: buyer.id
      },
      {
        rating: 5,
        comment: "Straightforward integration and clean docs.",
        snippetId: snippetList[3].id,
        userId: buyer.id
      },
      {
        rating: 4,
        comment: "Strong quality and support response time.",
        snippetId: snippetList[4].id,
        userId: buyer.id
      }
    ]
  });

  await prisma.purchase.create({
    data: {
      buyerId: buyer.id,
      snippetId: snippetList[0].id,
      amountCents: 4800,
      licenseType: LicenseType.commercial,
      stripeSessionId: "cs_test_demo"
    }
  });

  console.log("Seeded", snippets.count, "snippets");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
