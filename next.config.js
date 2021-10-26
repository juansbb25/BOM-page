const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withOffline = require('next-offline')

const nextConfig = {
  webpack(config, { webpack, dev, isServer }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
}

module.exports = plugins(
  [
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        async rewrites() {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js',
            },
            {
              has: [
                {
                  type: 'host',
                  value: '(?<host>.*)',
                },
              ],
              source: '/',
              destination: '/hosts/:host',
            },
            {
              has: [
                {
                  type: 'host',
                  value: '(?<host>.*)',
                },
                {
                  type: 'header',
                  key: 'accept-encoding',
                  value: '(?<encoding>.*)',
                },
                {
                  type: 'query',
                  key: 'x',
                  value: '(?<x>.*)',
                },
              ],
              source: '/headers/:slug*',
              destination: '/headers/:slug*/host/:host/encoding/:encoding/x/:x',
            },
            {
              has: [
                {
                  type: 'host',
                  value: '(?<host>.*)',
                },
                {
                  type: 'header',
                  key: 'accept-encoding',
                  value: '(?<encoding>.*)',
                },
              ],
              source: '/headers/:slug*',
              destination:
                '/headers/:slug*/host/:host/encoding/:encoding/x/null',
            },
            {
              has: [
                {
                  type: 'host',
                  value: '(?<host>.*)',
                },
              ],
              source: '/headers/:slug*',
              destination: '/headers/:slug*/host/:host/encoding/null/x/null',
            },
            {
              has: [
                {
                  type: 'host',
                  value: '(?<host>.*)',
                },
              ],
              source: '/posts/:id',
              destination: '/hosts/:host/posts/:id',
            },
            {
              has: [
                {
                  type: 'host',
                  value: '(?<host>.*)',
                },
              ],
              source: '/slugs/:slug*',
              destination: '/hosts/:host/slugs/:slug*',
            },
          ]
        },
      },
    ],
    withBundleAnalyzer,
  ],
  nextConfig
)
module.exports = {
  images: {
    domains: ['assets.epicurious.com'],
  },
}
