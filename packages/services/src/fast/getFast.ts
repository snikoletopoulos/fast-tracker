import { type PrismaClient } from "database";

export const getFast = async (prisma: PrismaClient, id: string) => {
	const fast = await prisma.fast.findUnique({ where: { id } });

	if (!fast) throw new Error("Fast not found");

	return fast;
};
