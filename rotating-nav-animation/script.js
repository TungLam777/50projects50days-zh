// 旋转导航动画 - JavaScript实现
// 功能：点击按钮控制页面旋转和导航菜单的显示/隐藏

// 获取DOM元素
const open = document.getElementById('open')           // 打开导航按钮
const close = document.getElementById('close')         // 关闭导航按钮  
const container = document.querySelector('.container') // 主容器元素

/**
 * 打开导航菜单
 * 点击打开按钮时，为容器添加'show-nav'类
 * 这会触发CSS中定义的旋转动画和导航菜单显示
 */
open.addEventListener('click', () => container.classList.add('show-nav'))

/**
 * 关闭导航菜单
 * 点击关闭按钮时，移除容器的'show-nav'类
 * 页面会旋转回原位，导航菜单隐藏
 */
close.addEventListener('click', () => container.classList.remove('show-nav'))
