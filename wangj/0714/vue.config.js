module.exports = {
    devServer:{
        proxy:{
            '/irs/':{
                target:'http:pacaio.match.qq.com',
                ws:true,
                changeOrigin:true
            }
        }
    }
}