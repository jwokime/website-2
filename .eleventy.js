module.exports = function(eleventyConfig) {
  // Collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse(); // Newest first
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  // Copy CSS folder to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME"); // Ensures CNAME is copied to _site/
  return {
    dir: {
      input: "src", // Adjust if necessary
      output: "_site"
    }
  };
};
