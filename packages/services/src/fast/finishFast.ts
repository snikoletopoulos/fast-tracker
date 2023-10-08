import { type PrismaClient } from "database";
import { getActiveFast } from "./getActiveFast";

export const finishFast = async (
	prisma: PrismaClient,
	userId: string,
	options?: { endAt?: Date }
) => {
	const activeFast = await getActiveFast(prisma, userId);

	if (!activeFast) throw new Error("No active fast found");

	const fast = await prisma.fast.update({
		where: { id: activeFast.id },
		data: {
      endedAt: options?.endAt ?? new Date(),
    },
	});

	return fast;
};
