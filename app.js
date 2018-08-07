

//模块导入
const fs = require("fs");
const http = require("http");
const path = require("path");

//记录网站根目录
let rootPath = path.join(__dirname,"www");

//创建服务器
let server = http.createServer((request,response)=>{
    //生成地址
    let targetPath = path.join(rootPath,request.url);
    //判断路径是否存在
    //存在
    if (fs.existsSync(targetPath)) {
        //判断是文件还是文件夹
        fs.stat(targetPath,(err,stats)=>{
            if(stats.isFile()){
                fs.readFile(targetPath,(err,data)=>{
                    //数据读取完毕
                    response.end(data);
                })
            }
        });
    }else {
        response.statusCode = 404;
        response.setHeader("content-type","text/html;charset=utf-8");
        response.end(`
                    <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
                    <html><head>
                    <title>404 Not Found</title>
                    </head><body>
                    <h1>Not Found</h1>
                    <p>你请求的${request.url} 不在服务器上哦,检查一下呗</p>
                    </body></html>
        `);
    }
    
});

//开启服务器
server.listen(1024,'192.168.38.56',()=>{
    console.log('开启成功');
})