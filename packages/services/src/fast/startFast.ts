import { type PrismaClient } from "database";
import { getActiveFast } from "./getActiveFast";

export const startFast = async (
	prisma: PrismaClient,
	userId: string,
	options?: { startAt?: Date }
) => {
	const existingFast = await getActiveFast(prisma, userId);

	if (existingFast) throw new Error("Fast already started");

	const fast = await prisma.fast.create({
		data: {
			userId,
			startedAt: options?.startAt ?? new Date(),
		},
	});

	return fast;
};
