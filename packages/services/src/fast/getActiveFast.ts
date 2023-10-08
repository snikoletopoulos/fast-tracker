import { type PrismaClient } from "database";

export const getActiveFast = async (prisma: PrismaClient, userId: string) =>
	await prisma.fast.findFirst({
		where: { userId, endedAt: null },
	});
