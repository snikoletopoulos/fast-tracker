import { CodegenConfig } from "@graphql-codegen/cli";

const generatedTagPlugin = {
	add: { content: `/* THIS FILE IS GENERATED */\n` },
};

const config: CodegenConfig = {
	schema: "src/schema.graphql",
	generates: {
		"src/types/graphql.ts": {
			plugins: [generatedTagPlugin, "typescript", "typescript-resolvers"],
			config: {
				useIndexSignature: true,
				contextType: "index#ApolloContext",
				mapperTypeSuffix: "Model",
				showUnusedMappers: true,
				mappers: {
					Fast: "database#Fast",
					User: "@clerk/clerk-sdk-node#User",
				},
				strictScalars: true,
				scalars: {
					DateTime: "Date",
				},
			},
		},
	},
	hooks: {
		afterStart: 'rimraf "./src/types/graphql.ts"',
		afterAllFileWrite: "prettier --write src/types/graphql.ts",
	},
};

export default config;
