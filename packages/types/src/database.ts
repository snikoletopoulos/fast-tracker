import type { PrismaClient, Prisma } from "database";

export type ServicePrisma = Omit<
	PrismaClient<
		Prisma.PrismaClientOptions,
		never
		// Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
	>,
	"$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
>;
