import { type PrismaClient } from "database";

export const getFasts = async (prisma: PrismaClient, userId: string) => {
	const fasts = await prisma.fast.findMany({ where: { userId: userId } });

	if (!fasts) throw new Error("Fasts not found");

	return fasts;
};
