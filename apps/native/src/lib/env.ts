import { z } from "zod";

const EnvSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]),
	EXPO_PUBLIC_SERVER_URL: z.string().url(),
	EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
});

EnvSchema.parse(process.env);

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof EnvSchema> {}
	}
}
