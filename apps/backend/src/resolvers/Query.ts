import type { QueryResolvers } from "types/graphql";

export const Query: QueryResolvers = {
	hello: () => "world!",
};
