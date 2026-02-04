import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Demo",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }

        return {
          id: "demo-user",
          email: credentials.email,
          name: credentials.username ?? "Demo User"
        };
      }
    })
  ],
  pages: {
    signIn: "/"
  }
};
