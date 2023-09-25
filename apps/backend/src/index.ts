import { readFileSync } from "fs";
import { resolve } from "path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { Resolvers } from "./types/graphql.ts";

const typeDefs = readFileSync(resolve(process.cwd(), "src", "schema.graphql"), {
	encoding: "utf-8",
});
const resolvers: Resolvers = {
	Query: {
		hello: () => "world",
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
