module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './images/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  ]
}