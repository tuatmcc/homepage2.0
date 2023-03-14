module.exports = {
	plugins: [
		[
			'postcss-preset-env',
			{
				stage: 3,
				features: {
					'nesting-rules': true,
					'custom-media-queries': true,
				},
			},
		],
		'postcss-nesting',
	],
};
