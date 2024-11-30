const path = require('path-browserify');

module.exports = {
  mode: 'development',
  entry: './src/routes/Appcenter.js', // Caminho correto para o arquivo de entrada
  resolve: {
    alias: {
      path: require.resolve('path-browserify'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.png', '.jpg'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-typescript']
          },
        },
      },
      {
        test: /\.tsx?$/, // Para arquivos TypeScript (.ts e .tsx)
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-transform-typescript']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Processa arquivos CSS
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/', // Pasta onde as imagens serão salvas
            },
          },
        ], // Processa arquivos de imagem
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
