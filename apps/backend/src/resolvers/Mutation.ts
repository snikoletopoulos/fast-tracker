import { prisma } from "lib/database";
import { finishFast, startFast } from "services";
import type { MutationResolvers } from "types/graphql";

export const Mutation: MutationResolvers = {
	startFast: (_root, { options }, context) =>
		startFast(prisma, context.user.id, { startAt: options?.startedAt }),
	finishFast: (_root, { options }, context) =>
		finishFast(prisma, context.user.id, { endAt: options?.endedAt }),
};
