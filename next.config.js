module.exports = {
  images: {
    loader: "imgix",
    path: "https://noop/",
 },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://boramyy.github.io/invitation' : ''
}