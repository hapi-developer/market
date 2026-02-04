export type Snippet = {
  id: string;
  title: string;
  description: string;
  price: number;
  language: string;
  tags: string[];
  rating: number;
  purchases: number;
  seller: string;
  licenseType: string;
  previewCode: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
};
