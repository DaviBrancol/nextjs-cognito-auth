const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withFonts(withImages({
  webpack: (config) => {
    config.resolve.extensions = ['.web.js', ...config.resolve.extensions]
    return config
  }
}))
