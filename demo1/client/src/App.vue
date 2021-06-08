<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <br>
  <br>
  <button @click="version">获取当前版本</button>
  <button @click="update">检查更新</button>
  <button @click="install" id="install" style="display: none">安装</button>
  <span>请查看控制台</span>
</template>

<script>
// const ffi = require('ffi-napi')
const path = require('path')
const fs = require("fs")
let {ipcRenderer} = require('electron')
const package_json = require('../package.json');

// 获取 DLL 路径（根据不同平台，选择不同的DLL）
// eslint-disable-next-line no-undef
let dll_path = path.join(__static, `dll/arithmetic-operations_${process.arch}.dll`)

// 修正开发环境的路径
dll_path = dll_path.replace('\\public\\', '\\')

// 修正生产环境的路径
dll_path = dll_path.replace('\\resources\\app.asar\\', '\\')

// 主进程向渲染进程发送消息
ipcRenderer.on('render_update', (event, type, msg, param) => {
  console.log(type, msg, param)
})

// 主进程向渲染进程发送消息
ipcRenderer.on('render_update_update-downloaded', (event, type, msg, param) => {
  console.log(type, msg, param)
  document.getElementById('install').style.display=""
})

export default {
  name: 'App',
  components: {
  },
  methods: {
    sum() {

      fs.access(dll_path, function (err) {
        if (err) {
          console.error(dll_path)
          alert('DLL 文件不存在：'+ dll_path)
        } else {
          console.log('DLL 文件已存在：', dll_path)
        }
      })

      /* const dll = new ffi.Library(dll_path, {
        'sum':
            [
              'int', ['int', 'int']
            ]
      })

      const result = dll.sum(
          parseInt(document.getElementById("numA").value),
          parseInt(document.getElementById("numB").value)
      )

      document.getElementById('numC').value = result.toString()
      */

    },
    version() {
      // electron 版本
      console.log(package_json.version)
    },
    update() {
      // 渲染进程向主进程发送消息
      ipcRenderer.send('main_update')
    },
    install() {
      // 渲染进程向主进程发送消息
      ipcRenderer.send('main_install')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
