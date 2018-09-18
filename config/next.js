const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const { webpack }  = withSass()
// const  image = withImages()

const config = withPlugins([
  [withSass],
]);

console.log(config)

module.exports.next = {

  // Sails integration options
  api: {
    // Prefix for all Sails API routes
    prefix: '/api'
  },

  // Next.js instance options. Passed to `next()`.
  server: {
    // Next.js root directory
    dir: '.',
    // Dev mode. Is overridden by `process.env.NODE_ENV !== 'production'`
    dev: false,
    // Hide error messages
    quiet: false,
    // Equivalent to a `next.config.js` file
    conf: {
    
    },
  }
};


