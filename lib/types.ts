export type Snippet = {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  priceCents: number;
  currency: string;
  licenseType: string;
  previewCode: string;
  seller: string;
  ratingAvg: number;
  ratingCount: number;
  salesCount: number;
  createdAt: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type SellerProfile = {
  username: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  badges: string[];
  stats: { label: string; value: string }[];
};
