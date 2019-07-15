module.exports = {
    devServer:{
        proxy:{
            '/irs/':{
                target:'https://pacaio.match.qq.com',
                ws:true,
                changeOrigin:true
            }
        }
    }
}