// FAQ折叠 - JavaScript实现
// 功能：实现手风琴式的FAQ组件，点击问题可展开或收缩答案

// 获取所有FAQ切换按钮
const toggles = document.querySelectorAll('.faq-toggle')

/**
 * 为每个FAQ切换按钮添加点击事件监听器
 * 
 * 实现原理：
 * 1. 获取点击按钮的父元素（FAQ项）
 * 2. 切换父元素的'active'类
 * 3. CSS负责处理展开/收缩的视觉效果
 * 
 * 手风琴组件的核心特点：
 * - 简单的类切换机制
 * - CSS处理所有动画效果
 * - 每个FAQ项独立控制
 * - 支持多个项同时展开
 */
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // 切换当前FAQ项的激活状态
        toggle.parentNode.classList.toggle('active')
    })
})
