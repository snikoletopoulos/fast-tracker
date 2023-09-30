import { z } from "zod";

const EnvSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]),
	CLERK_PUBLISHABLE_KEY: z.string().min(1),
	CLERK_SECRET_KEY: z.string().min(1),
	CLERK_PEM_PUBLIC_KEY: z.string().min(1),
});

EnvSchema.parse(process.env);

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof EnvSchema> {}
	}
}
