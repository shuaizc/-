Ø 项目工程化
	Ø 1、安装gulp工具(要安装成全局和项目依赖两种)
	http://www.gulpjs.com.cn/docs/api/ 
	 https://github.com/gulpjs/gulp
	
	npm install gulp
	
	Ø 2、安装es6转换为es5工具
	https://www.npmjs.com/package/gulp-babel
	npm install --save-dev gulp-babel babel-preset-es2015
	
	Ø 3、gulp压缩js插件
	gulp压缩js插件（只能识别es5代码，使用之前请先将es6代码转换成es5）     
	 在项目中利用它实现src下面的所有js文件的压缩
	 https://www.npmjs.com/package/gulp-uglify
	
	
	Ø 4、gulp压缩css插件gulp-clean-css
	https://www.npmjs.com/package/gulp-clean-css

	Ø 5、gulp压缩图片插件gulp-imagemin
	https://www.npmjs.com/package/gulp-imagemin
	
	
	Ø 6、gulp压缩html插件 gulp-htmlmin
	https://www.npmjs.com/package/gulp-htmlmin
	
	Ø 7、gulp给css和js文件重命名为MD5插件 gulp-rev（可以用来解决cdn或者微信客户端的静态文件缓存问题）
	https://www.npmjs.com/package/gulp-rev
	
	
	Ø 8、gulp 替换html中引用的css文件名称为md5后的名称 gulp-rev-collector
	https://www.npmjs.com/package/gulp-rev-collector
	
    9、gulp-copy 实现文件夹的拷贝
    https://www.npmjs.com/package/gulp-copy

使用案例：http://www.tuicool.com/articles/iA7zmym


# 使用gulp来进行前端的工程化
## 使用gulp-copy来拷贝文件夹bowersrc中的所有文件到dist

## 使用.editorconfig来进行多个编辑器的代码风格统一配置
介绍网址：
http://www.cnblogs.com/xiyangbaixue/p/4201490.html
注意：
在sublime text中必须先安装好 EditorConfig插件


## 使用cross-env 来进行跨平台执行cmd指令
npm run dev  运行了开发环境 (6000)
npm run prd  运行了生产环境 (7000)

package.json中的scripts 中的所有命令都可以使用 npm run 指令 去运行

在package.json中的scripts 中设置的任何指令都需要进行多平台的兼容
类似于：set PORT=6000 NODE_EVN=dev nodemon index.js 写法可能仅仅只能在windows下运行
1、在window中设置环境变量的写法：
	在cmd窗口中使用： set PORT = 9000 ,
	并且可以使用 && 连写： set PORT=9000 && npm run post
	
	在PowerShell中使用: $env:PORT= 9000
	不可以使用 && 连写： set PORT=9000 && npm run post 会报错
	
2、为了兼容window，linux，macosx  的环境变量设置，可以使用cross-env 
	地址在：https://www.npmjs.com/package/cross-env
	可以先 npm install cross-env -g 安装为全局变量后执行cross-env  变量名称=值
	例如: cross-env PORT=9000 NODE_ENV=production 


这个时候我们可以使用cross-env 来实现跨平台指令的执行



## 将源码托管到github上

## 开始实现业务逻
### 利用express中的一些技术实现web服务器
### 初始化mongoose


### 设计数据库表结构

### 实现注册和登录功能
重点：session 和 cookie (维持状态)
