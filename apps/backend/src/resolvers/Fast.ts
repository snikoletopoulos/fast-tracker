import { type FastResolvers } from "types/graphql";
import { allowAuthenticated } from "helpers/auth";

export const Fast: FastResolvers = {
	user: (_root, _args, context) => {
		allowAuthenticated(context.user);
		return context.user;
	},
};
