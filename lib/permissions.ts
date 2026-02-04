export const canManageSnippet = (userId: string | null, sellerId: string) => {
  return Boolean(userId && userId === sellerId);
};

export const canReviewSnippet = (hasPurchased: boolean) => {
  return hasPurchased;
};
