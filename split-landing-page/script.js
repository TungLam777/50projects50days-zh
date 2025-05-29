// 分屏着陆页 - JavaScript实现
// 功能：鼠标悬停时控制左右分屏的宽度变化

// 获取DOM元素
const left = document.querySelector('.left')           // 左侧分屏
const right = document.querySelector('.right')         // 右侧分屏
const container = document.querySelector('.container') // 主容器

/**
 * 左侧分屏鼠标事件
 * 鼠标进入时：为容器添加'hover-left'类，触发左侧扩展动画
 * 鼠标离开时：移除'hover-left'类，恢复默认状态
 */
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

/**
 * 右侧分屏鼠标事件
 * 鼠标进入时：为容器添加'hover-right'类，触发右侧扩展动画
 * 鼠标离开时：移除'hover-right'类，恢复默认状态
 */
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
