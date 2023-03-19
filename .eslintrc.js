module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'prettier/prettier',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'jsx-a11y/media-has-caption': 'off',
		// "no-console": ["error", { "allow": ["warn", "error"] }],
		'no-console': 'off',
		'no-plusplus': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx']
			}
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never'
			}
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true
			}
		],
		'max-len': [
			'warn',
			{
				code: 140
			}
		],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function'
			}
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
				peerDependencies: true
			}
		],
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				required: {
					some: ['nesting', 'id']
				}
			}
		],
		'jsx-a11y/label-has-for': [
			'error',
			{
				required: {
					some: ['nesting', 'id']
				}
			}
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-nested-ternary': 'off'
	},
	settings: {
		'import/resolver': {
			typescript: {}
		}
	}
}
