module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime", // React 17 and above
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
	],
	rules: {
		"react/jsx-filename-extension": [
			1,
			{ allow: "as-needed", extensions: [".jsx", ".tsx"] },
		],
		"react/function-component-definition": [
			"warn",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"react/prop-types": "off",
		"react/hook-use-state": ["error"],
		"react/self-closing-comp": "warn",
		"react/jsx-closing-tag-location": "warn",
		"jsx-a11y/lang": "warn",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		browser: true,
	},
};
