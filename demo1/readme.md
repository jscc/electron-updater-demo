比较简单直接的一种方式

1. 需要一个静态资源服务器
2. 配制 electron-build
3. 配制 electron-updater
4. 编写 electron-updater(autoUpdater)相关代码
5. 打包一个初始版本，进行安装
6. 修改版本号（更高的）重新打包
7. 打包后的文件里，其中有 xxx setup x.x.x.exe 和 latest.yml 文件，修改名称
8. 将修改后的文件放在资源服务器中
9. 打开刚才安装的初始版本，点击检查更新，如果有更新，将会下载安装
10. 安装形式类型安装一个新的软件