// 进度步骤 - JavaScript实现
// 功能：通过按钮控制进度步骤的前进和后退

// 获取DOM元素
const progress = document.getElementById('progress')        // 进度条元素
const prev = document.getElementById('prev')                // 上一步按钮
const next = document.getElementById('next')                // 下一步按钮
const circles = document.querySelectorAll('.circle')       // 所有步骤圆圈

// 当前激活的步骤索引（从1开始）
let currentActive = 1

// 下一步按钮点击事件
next.addEventListener('click', () => {
    currentActive++

    // 确保不超过最大步骤数
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    // 更新界面显示
    update()
})

// 上一步按钮点击事件
prev.addEventListener('click', () => {
    currentActive--

    // 确保不小于第一步
    if(currentActive < 1) {
        currentActive = 1
    }

    // 更新界面显示
    update()
})

/**
 * 更新进度显示
 * 根据当前激活步骤更新圆圈状态、进度条宽度和按钮状态
 */
function update() {
    // 更新每个步骤圆圈的激活状态
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')     // 添加激活样式
        } else {
            circle.classList.remove('active')  // 移除激活样式
        }
    })

    // 获取所有激活的步骤
    const actives = document.querySelectorAll('.active')

    // 计算并设置进度条宽度
    // 公式：(激活步骤数 - 1) / (总步骤数 - 1) * 100%
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // 根据当前步骤更新按钮的可用状态
    if(currentActive === 1) {
        prev.disabled = true        // 第一步时禁用上一步按钮
    } else if(currentActive === circles.length) {
        next.disabled = true        // 最后一步时禁用下一步按钮
    } else {
        prev.disabled = false       // 中间步骤时两个按钮都可用
        next.disabled = false
    }
}
