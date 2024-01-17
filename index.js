module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: 'airbnb-base',
	overrides: [
		{
			env: { node: true },
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: { sourceType: 'script' },
		},
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		strict: ['error', 'global'],
		'max-len': ['error', 160],
		'prefer-object-spread': 'error',
		'no-underscore-dangle': ['error', { allow: ['_id', '_doc'] }],
		camelcase: 'warn',
		// newline between functions declaration
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: 'function' },
			{ blankLine: 'always', prev: 'function', next: '*' },
		],
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external', 'internal'],
				],
				'newlines-between': 'always',
			},
		],
		// 3+ function parameters - force new lines
		'function-paren-newline': ['warn', { minItems: 3 }],
		curly: ['error', 'all'],
		'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
		'no-console': 'error',
		complexity: ['error', 15],
	},
};
