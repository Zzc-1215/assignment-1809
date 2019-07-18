module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:"https://www.tianqiapi.com/",
                ws:true,
                changeOrigin:true
            }
        }
    }



    
}