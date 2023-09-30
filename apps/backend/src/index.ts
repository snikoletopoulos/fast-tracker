import { readFileSync } from "fs";
import { resolve } from "path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { type User } from "@clerk/clerk-sdk-node";
import { GraphQLError } from "graphql";
import { z } from "zod";

import "modules/env";
import * as resolvers from "resolvers";
import { parseJWT } from "modules/auth";
import { clerkClient } from "lib/clerk";

const typeDefs = readFileSync(resolve(process.cwd(), "src", "schema.graphql"), {
	encoding: "utf-8",
});

export interface ApolloContext {
	user: User;
	dataSources: Record<string, never>;
}

const server = new ApolloServer<ApolloContext>({
	typeDefs,
	resolvers,
	introspection: process.env.NODE_ENV === "development",
});

void (async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
		context: async ({ req }) => {
			try {
				if (!req.headers.authorization)
					throw new Error("No authorization header");

				const result = parseJWT(req.headers.authorization);
				const resultWithId = z.object({ id: z.string() }).safeParse(result);
				if (!resultWithId.success) throw new Error("Invalid JWT");

				// TODO: wait for clerk response
				const client = await clerkClient.clients.getClient(
					resultWithId.data.id
				);
				const user = await clerkClient.users.getUser(client.sessions[0].userId);

				return { user, dataSources: {} };
			} catch (error) {
				console.error("error authenticating", error);

				throw new GraphQLError("User is not authenticated", {
					extensions: {
						code: "UNAUTHENTICATED",
						http: { status: 401 },
					},
				});
			}
		},
	});

	console.log(`🚀  Server ready at: ${url}`);
})();
