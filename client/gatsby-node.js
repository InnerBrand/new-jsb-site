require = require('esm')(module);
module.exports = require('./gatsby-node.esm.js');

exports.onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        util: require.resolve('util/'),
      },
    },
  });
};
