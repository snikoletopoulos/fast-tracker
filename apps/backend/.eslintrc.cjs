module.exports = {
	root: true,
	extends: ["custom/node", "custom/typescript"],
	ignorePatterns: ["src/types/graphql.ts"],
	rules: {
		"no-console": "off",
	}
};
