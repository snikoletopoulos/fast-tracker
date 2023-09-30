import { Clerk } from "@clerk/clerk-sdk-node";

type ClerkClient = ReturnType<typeof Clerk>;

export const clerkClient: ClerkClient = Clerk({
	secretKey: process.env.CLERK_SECRET_KEY,
});
