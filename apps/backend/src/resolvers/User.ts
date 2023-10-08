import { getFasts } from "services";

import { type UserResolvers } from "types/graphql";
import { prisma } from "lib/database";

export const User: UserResolvers = {
	fasts: root => getFasts(prisma, root.id),
};
