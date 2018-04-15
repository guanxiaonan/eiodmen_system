# eiodmen_system
说明：此系统为浙江富阳爱迪曼环保公司设施巡查、检查表的数据后台处理系统。

功能：
    通过手机App收集数据，提交给后台数据库存储，并能够从网页端获取到数据（以表格形式显示），然后可以将数据通过pdf形式输出。
    

使用node.js + koa + knex +bootstarp 搭建系统

数据库： mysql 5.7以上
数据缓存：Redis 3.0

开始系统：

首先，安装相关配置文件：npm install  

之后，开启系统：npm start
创建数据库：eiodmen_system,在此数据库下面建表 test_data。

测试服务器是否成功： 网页输入：http://localhost:1803/test  
                   如果页面出现： {"data":"hello world"}。表示服务器成功运行。
