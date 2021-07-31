const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
        // 移除 preload 插件
        config.plugins.delete('preload');
    },
    configureWebpack: (config) => {
        config.plugins.forEach((val) => {
            if (val instanceof HtmlWebpackPlugin) {
                val.options.title = '网易云音乐';
            }
        })
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/common.less")]
        }
    },
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8088,
        proxy: {
            '/api': {
                target: 'https://music.163.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}