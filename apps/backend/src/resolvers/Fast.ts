import { type FastResolvers } from "types/graphql";
import { clerkClient } from "lib/clerk";

export const Fast: FastResolvers = {
	user: root => clerkClient.users.getUser(root.userId),
};
