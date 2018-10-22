const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
    const appTarget = env && env.APP_TARGET || 'VERSION_A';
    return {
        entry: './src/index.js',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            hot: true
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'Output Management'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NormalModuleReplacementPlugin(/(.*)-APP_TARGET(\.*)/, function(resource) {
                resource.request = resource.request.replace(/-APP_TARGET/, `-${appTarget}`);
            })
        ],
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                            'file-loader'
                        ]
                    }
            ]
        }
}};
