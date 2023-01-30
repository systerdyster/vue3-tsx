const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const terserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}, argv = {}) => {
    const isProduction = argv.mode === 'production';
    process.env.NODE_ENV = argv.mode;

    var config = {
        entry: [
            path.join(__dirname, "src", "index.ts"),
            path.join(__dirname, "src", "styles", "index.css")],

        output: {
            path: path.resolve(__dirname, "www"),
            publicPath: '/',
            filename: (() => {
                if (isProduction) return "[name]-[chunkhash:14].min.js";
                else return "[name].js";
            })(),
            chunkFilename: (() => {
                if (isProduction) return "[name]-[chunkhash:14].min.js";
                else return "[name].js";
            })(),
        },

        target: 'web',
        devServer: {
            server: 'http',
            port: 4000,
            hot: true,
            open: true,
            static: {
                directory: path.resolve(__dirname, 'www')
            },
            client: {
                logging: 'error',
                overlay: {
                    errors: true,
                    warnings: false
                }
            }
        },

        optimization: {
            minimize: isProduction,
            minimizer: [new terserJSPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                  }
            }), new CssMinimizerPlugin()]
        },

        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
                inject: true,
                filename: 'index.html',
                title: 'Vue3 Boilerplate',
                chunksSortMode: 'none'
            }),

            new miniCssExtractPlugin({
                filename: 'style-[contenthash:14].min.css'
            }),

            new webpack.DefinePlugin({
                __IS_PRODUCTION__: JSON.stringify(isProduction),
                __VUE_OPTIONS_API__: JSON.stringify(!isProduction),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(!isProduction)
            }),
            
            new VueLoaderPlugin()
        ],

        performance: {
            hints: 'warning'
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: { appendTsSuffixTo: [/\.vue$/] }
                        }
                    ],
                    include: [
                        path.join(__dirname, 'src'),
                        path.join(__dirname, 'node_modules/@obos')
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    include: [
                        path.join(__dirname, "src")
                    ]
                },
                {
                    test: /\.pug$/,
                    use: ['pug-plain-loader'],                     
                    include: [path.join(__dirname, "src")]
                },
                {
                    test: /\.(css)$/,
                    use: [ { loader: miniCssExtractPlugin.loader },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                sourceMap: !isProduction
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: !isProduction,
                            }
                        }
                    ],
                    include: [
                        path.join(__dirname, 'src')
                    ]
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    type: 'asset/resource',
                    generator: {
                      filename: 'fonts/[hash][ext][query]'
                    },
                    include: [
                        path.join(__dirname, 'src')
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/i,
                    resourceQuery: { not: [/inline/] },
                    type: 'asset/resource',
                    generator: {
                      filename: 'images/[hash][ext][query]'
                    },
                    include: [
                        path.join(__dirname, 'src')
                    ]
                }
            ]
        },

        resolve: {
            extensions: ['.ts', '.js', '.json', '.css', '.pug', '.vue'],
            modules: [
                path.resolve(__dirname, 'src'), 
                'node_modules'
            ],
            alias: {
                'vue$': 'vue/dist/vue.esm-bundler.js',
                '__business': path.resolve(__dirname, 'src/business'),
                '__components': path.resolve(__dirname, 'src/components'),
                '__definitions': path.resolve(__dirname, 'src/business/definitions')
            }
        }
    };

    if (isProduction) {
        config.devtool = false;
    } else {
        config.devtool = 'source-map';
        config.plugins.push(new ESLintPlugin({ extensions: ['ts'] }));
        config.plugins.push(new StylelintPlugin());
    }

    return config;
};
