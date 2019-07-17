module.exports={
    devServer:{
        proxy:{
            '/simpleWeather':{
                target:"http://apis.juhe.cn",
                ws:true,
                changeOrigin:true
            }
        }
    }



    
}