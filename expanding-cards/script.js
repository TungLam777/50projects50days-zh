// 展开卡片效果 - JavaScript实现
// 功能：点击卡片时展开，其他卡片收缩

// 获取所有卡片元素
const panels = document.querySelectorAll('.panel')

// 为每个卡片添加点击事件监听器
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // 移除所有卡片的active类
        removeActiveClasses()
        // 为当前点击的卡片添加active类
        panel.classList.add('active')
    })
})

/**
 * 移除所有卡片的active类
 * 用于重置卡片状态，确保只有一个卡片处于展开状态
 */
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
