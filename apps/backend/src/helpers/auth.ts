import { GraphQLError } from "graphql";
import { type User } from "@clerk/clerk-sdk-node";
import jwt from "jsonwebtoken";

import { type ApolloContext } from "index";

export const allowAuthenticated = (
	context: ApolloContext
): asserts context is ApolloContext & { user: User } => {
	if (!context.user)
		throw new GraphQLError("Not authenticated", { extensions: { code: 401 } });
};

export const parseJWT = (token: string) => {
	if (!token) {
		return null;
	}

	// eslint-disable-next-line import/no-named-as-default-member
	return jwt.verify(token, process.env.CLERK_PEM_PUBLIC_KEY) as jwt.JwtPayload;
};
