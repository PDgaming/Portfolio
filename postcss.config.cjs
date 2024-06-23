import autoprefixer from 'autoprefixer';
import postcssPresetEnv from "postcss-preset-env"
import csso from "postcss-csso"
import postcssGlobalData from "@csstools/postcss-global-data"
 
const config = {
	plugins: [
		postcssGlobalData({
			files: ['src/lib/styles/custom-media-queries.css']
		}),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		}),
		autoprefixer(),
		csso()
	]
};
 
module.exports = config;