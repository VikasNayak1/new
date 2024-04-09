// next.config.js

const basePath = process.env.NODE_ENV === 'production' ? '/repository-name' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
};
