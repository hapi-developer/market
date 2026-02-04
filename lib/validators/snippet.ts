import { z } from "zod";

export const snippetFilterSchema = z.object({
  search: z.string().optional(),
  language: z.string().optional(),
  licenseType: z.string().optional(),
  tag: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  sort: z.string().optional(),
  page: z.string().optional(),
  perPage: z.string().optional()
});

export const snippetCreateSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  language: z.string().min(2),
  tags: z.array(z.string().min(1)).min(1),
  priceCents: z.number().int().nonnegative(),
  currency: z.string().min(3),
  licenseType: z.string().min(3),
  previewCode: z.string().min(10),
  fullCode: z.string().min(10)
});

export const snippetUpdateSchema = snippetCreateSchema.partial();

export const reviewCreateSchema = z.object({
  snippetId: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(3)
});

export const saveSnippetSchema = z.object({
  snippetId: z.string().min(1)
});
