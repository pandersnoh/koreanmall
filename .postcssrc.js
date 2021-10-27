module.exports = {
  plugins: [
    require('autoprefixer')
  ],
  // 모듈 처리 방식을 설정
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~/scss/common.scss";'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|ttf)$/,
        use: 'file-loader'
      }
    ]
  }  
}