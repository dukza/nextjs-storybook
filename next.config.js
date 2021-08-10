module.exports = {
  images: {
    loader: "imgix",
    path: "https://dukza.github.io/nextjs-storybook/",
 },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://dukza.github.io/nextjs-storybook/' : ''
}