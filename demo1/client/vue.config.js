module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                appId: 'com.luochen.electron.demo',
                productName: 'lcdemo',
                // see https://www.electron.build/configuration/publish#genericserveroptions
                publish: {
                    provider: 'generic',
                    url: 'http://192.168.2.247/lcdemo'
                },
                win: {
                    // must be at least 256x256
                    icon: './public/favicon.ico'
                },
                asar: false,
                nsis: {
                    oneClick: false,
                    // 允许修改安装目录
                    allowToChangeInstallationDirectory: true,
                    allowElevation: true,
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    shortcutName: 'lcdemo'
                }
            }
        },
        configureWebpack: {
            resolve: {
                symlinks: true
            }
        }
    }
}