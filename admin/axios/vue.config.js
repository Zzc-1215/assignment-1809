module.exports = {
    devServer: {
        proxy: {
          '/toutiao': {
            target: 'http://v.juhe.cn',
            ws: true,
            changeOrigin: true
          },
        }
    }
}