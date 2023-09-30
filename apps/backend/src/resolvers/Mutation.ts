import { allowAuthenticated } from "helpers/auth";
import type { MutationResolvers } from "types/graphql";

export const Mutation: MutationResolvers = {
	startFast: (_root, _args, context) => {
		return {
			id: "1",
			user: context.user,
		};
	},
	endFast: (_root, _args, context) => {
		return {
			id: "1",
			user: context.user,
		};
	},
};
