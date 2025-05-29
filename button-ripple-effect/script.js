// 按钮波纹效果 - JavaScript实现
// 功能：为按钮添加点击时的波纹扩散动画效果，类似Material Design的Ripple效果

// 获取所有具有ripple类的按钮
const buttons = document.querySelectorAll('.ripple')

/**
 * 为每个按钮添加波纹效果
 */
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // 获取鼠标点击的页面坐标
        const x = e.pageX  // 鼠标点击位置的X坐标（相对于整个页面）
        const y = e.pageY  // 鼠标点击位置的Y坐标（相对于整个页面）

        // 获取按钮相对于页面的位置
        const buttonTop = e.target.offsetTop    // 按钮顶部距离页面顶部的距离
        const buttonLeft = e.target.offsetLeft  // 按钮左侧距离页面左侧的距离

        // 计算鼠标点击位置相对于按钮的坐标
        const xInside = x - buttonLeft  // 点击位置在按钮内的X坐标
        const yInside = y - buttonTop   // 点击位置在按钮内的Y坐标

        // 创建波纹圆形元素
        const circle = document.createElement('span')
        circle.classList.add('circle')  // 添加circle类，应用CSS动画样式
        
        // 设置圆形元素的位置（以点击位置为中心）
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // 将圆形元素添加到按钮中
        this.appendChild(circle)

        // 500毫秒后移除圆形元素（与CSS动画时长一致）
        setTimeout(() => circle.remove(), 500)
    })
})