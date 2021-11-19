module.exports = {
	printWidth: 100,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	// Might have some problems with this one because of eslint
	// Because we require to have parens around an arrow function when it has a body
	arrowParens: 'avoid',
	parser: 'flow'
};
