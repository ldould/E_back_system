# E_back_system

一个简单的电商后台管理系统

# 菜单梳理

首页

商品
--商品管理
--品类管理

订单
--订单管理

用户
--用户管理


# package.json 配置命令

"scripts": {

<!-- yarn run dev -->

"dev": "node_modules/.bin/webpack-dev-server",

<!-- -p线上环境的打包 -->

<!-- rarn run dist -->

"dist": "node_modules/.bin/webpack -p"
},
