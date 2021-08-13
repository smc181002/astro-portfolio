// snowpack.config.mjs
export default {
  alias: {
    // Map "$components/*" imports to "src/components/*"
    $components: './src/components',
    $layouts: './src/layouts',
    // Map "$/*" imports to "src/*"
    $: './src',
    // Define your own!
    '$utils': './src/utils',
  },
  // ...
};