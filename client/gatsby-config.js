module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "jsb gatsby 2022",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Grotesk`,
          `sans-serif`,
        ],
        display: 'swap'
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9w4zo7wb",
        dataset: "jsb-cms",
        watchMode: true
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["./src/styles/core"],
        }
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-image",
  ],
};