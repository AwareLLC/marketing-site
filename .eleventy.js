const yaml = require("js-yaml");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function(eleventyConfig) {


  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/assets', 'assets')
  eleventyConfig.addPassthroughCopy('src/media')
	eleventyConfig.addPassthroughCopy("src/admin/config.yml");

	eleventyConfig.addPassthroughCopy({
		'./node_modules/alpinejs/dist/cdn.js': 'assets/scripts/alpine.js',
	})

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });

  return {
    dir: { input: 'src', output: '_site' }
  };

};
