module.exports = {
    devServer: {
        proxy: {
            '/weather': {
                target: 'http://v.juhe.cn',
                ws: true,
                changeOrigin: true
            },

        }
    }
}