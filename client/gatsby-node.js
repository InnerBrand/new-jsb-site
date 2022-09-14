require = require('esm')(module);
module.exports = require('./gatsby-node.esm.js');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        util: require.resolve('util/'),
      },
    },
    plugins: [
      plugins.define({
        MY_FANCY_VARIABLE: 'the-value',
      }),
    ],
  });
};
