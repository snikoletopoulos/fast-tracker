module.exports = {
	extends: ["./base.js", "./typescript.js", "plugin:node/recommended"],
	rules: {
		"node/prefer-promises/fs": "error",
	},
	env: {
		node: true,
		es6: true,
	},
};
