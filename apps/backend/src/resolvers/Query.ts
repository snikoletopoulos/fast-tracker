import { getFast, getFasts } from "services";

import type { QueryResolvers } from "types/graphql";
import { prisma } from "lib/database";

export const Query: QueryResolvers = {
	hello: () => "world!",
	fast: (_root, { id }) => getFast(prisma, id),
	fasts: (_root, _args, context) => getFasts(prisma, context.user.id),
};
