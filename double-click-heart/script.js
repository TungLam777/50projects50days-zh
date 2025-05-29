// 双击爱心 - JavaScript实现
// 功能：检测双击事件，在点击位置创建爱心动画效果，并统计点赞次数

// 获取DOM元素
const loveMe = document.querySelector('.loveMe')    // 图片容器元素
const times = document.querySelector('#times')      // 点赞次数显示元素

// 状态变量
let clickTime = 0        // 记录上次点击时间
let timesClicked = 0     // 点赞总次数

/**
 * 图片点击事件监听器
 * 功能：检测双击事件（两次点击间隔小于800毫秒）
 */
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        // 第一次点击，记录时间
        clickTime = new Date().getTime()
    } else {
        // 计算与上次点击的时间间隔
        const timeDifference = new Date().getTime() - clickTime
        
        if(timeDifference < 800) {
            // 时间间隔小于800毫秒，认为是双击
            createHeart(e)      // 创建爱心动画
            clickTime = 0       // 重置点击时间
        } else {
            // 时间间隔过长，重新开始计时
            clickTime = new Date().getTime()
        }
    }
})

/**
 * 创建爱心动画函数
 * @param {Event} e - 点击事件对象
 * 
 * 功能：
 * 1. 在点击位置创建爱心图标
 * 2. 添加放大淡出动画
 * 3. 更新点赞计数
 * 4. 动画结束后清理元素
 */
const createHeart = (e) => {
    // 创建爱心图标元素
    const heart = document.createElement('i')
    heart.classList.add('fas')        // Font Awesome样式类
    heart.classList.add('fa-heart')   // 爱心图标类

    // 获取鼠标点击的页面坐标
    const x = e.clientX  // 鼠标X坐标（相对于视口）
    const y = e.clientY  // 鼠标Y坐标（相对于视口）

    // 获取图片容器的位置偏移
    const leftOffset = e.target.offsetLeft   // 容器左边距
    const topOffset = e.target.offsetTop     // 容器上边距

    // 计算鼠标在容器内的相对位置
    const xInside = x - leftOffset
    const yInside = y - topOffset

    // 设置爱心图标的位置
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    // 将爱心图标添加到容器中
    loveMe.appendChild(heart)

    // 更新并显示点赞次数
    times.innerHTML = ++timesClicked

    // 1秒后移除爱心元素（与CSS动画时长一致）
    setTimeout(() => heart.remove(), 1000)
}