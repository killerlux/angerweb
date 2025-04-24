const moment = require('moment');
const less = require('less');
const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");

  // Compile LESS to CSS
  eleventyConfig.on('beforeBuild', async () => {
    const lessFile = path.join(__dirname, 'src/css/style.less');
    const cssFile = path.join(__dirname, '_site/css/style.css');
    
    try {
      const lessContent = fs.readFileSync(lessFile, 'utf8');
      const result = await less.render(lessContent);
      fs.writeFileSync(cssFile, result.css);
    } catch (error) {
      console.error('Error compiling LESS:', error);
    }
  });

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