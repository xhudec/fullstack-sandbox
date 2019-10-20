const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json',
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
