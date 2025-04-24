const moment = require('moment');

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Add date filter
  eleventyConfig.addFilter("date", function(date, format) {
    return moment(date).format(format);
  });

  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    // Configuration du serveur de développement
    server: {
      port: 3000
    }
  };
}; 