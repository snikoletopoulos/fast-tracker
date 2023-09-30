import { readFileSync } from "fs";
import { resolve } from "path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import * as resolvers from "resolvers";

const typeDefs = readFileSync(resolve(process.cwd(), "src", "schema.graphql"), {
	encoding: "utf-8",
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

void (async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },

	console.log(`🚀  Server ready at: ${url}`);
})();
