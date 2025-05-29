// 粘性导航 - JavaScript实现
// 功能：监听页面滚动事件，当滚动超过一定距离时改变导航栏样式

// 获取导航栏元素
const nav = document.querySelector('.nav')

// 添加滚动事件监听器
window.addEventListener('scroll', fixNav)

/**
 * 修复导航栏函数
 * 功能：
 * 1. 检测页面滚动位置
 * 2. 当滚动距离超过阈值时激活粘性样式
 * 3. 当滚动回到顶部时恢复原始样式
 */
function fixNav() {
    // 计算滚动阈值：导航栏高度 + 150像素的缓冲区
    const scrollThreshold = nav.offsetHeight + 150
    
    if(window.scrollY > scrollThreshold) {
        // 滚动距离超过阈值，添加激活样式
        nav.classList.add('active')
    } else {
        // 滚动距离未超过阈值，移除激活样式
        nav.classList.remove('active')
    }
}