// 隐藏搜索组件 - JavaScript实现
// 功能：点击搜索按钮时展开/收缩搜索输入框

// 获取DOM元素
const search = document.querySelector('.search')   // 搜索容器
const btn = document.querySelector('.btn')         // 搜索按钮
const input = document.querySelector('.input')     // 搜索输入框

/**
 * 搜索按钮点击事件处理
 * 功能：
 * 1. 切换搜索容器的active类，触发展开/收缩动画
 * 2. 自动聚焦到输入框，提升用户体验
 */
btn.addEventListener('click', () => {
    search.classList.toggle('active')  // 切换激活状态
    input.focus()                      // 聚焦输入框，方便用户直接输入
})
