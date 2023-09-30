import { GraphQLError } from "graphql";
import { type User } from "@clerk/clerk-sdk-node";

import { ApolloContext } from "index";

export const allowAuthenticated = (
	context: ApolloContext
): asserts context is ApolloContext & { user: User } => {
	if (!context.user)
		throw new GraphQLError("Not authenticated", { extensions: { code: 401 } });
};
