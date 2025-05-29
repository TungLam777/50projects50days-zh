// 绘图应用 - JavaScript实现
// 功能：使用Canvas API实现完整的绘图功能，支持画笔大小调节、颜色选择和画布清除

// 获取DOM元素
const canvas = document.getElementById('canvas');        // 画布元素
const increaseBtn = document.getElementById('increase'); // 增大画笔按钮
const decreaseBtn = document.getElementById('decrease'); // 减小画笔按钮
const sizeEL = document.getElementById('size');          // 画笔大小显示元素
const colorEl = document.getElementById('color');        // 颜色选择器
const clearEl = document.getElementById('clear');        // 清除按钮

// 获取Canvas 2D绘图上下文
const ctx = canvas.getContext('2d');

// 绘图状态变量
let size = 10           // 画笔大小
let isPressed = false   // 鼠标是否按下
colorEl.value = 'black' // 设置默认颜色
let color = colorEl.value // 当前颜色
let x                   // 上一个鼠标位置X坐标
let y                   // 上一个鼠标位置Y坐标

/**
 * 鼠标按下事件监听器
 * 功能：开始绘图，记录起始位置
 */
canvas.addEventListener('mousedown', (e) => {
    isPressed = true    // 标记鼠标按下状态

    // 获取鼠标在画布内的相对坐标
    x = e.offsetX
    y = e.offsetY
})

/**
 * 鼠标松开事件监听器
 * 功能：结束绘图，重置状态
 */
document.addEventListener('mouseup', (e) => {
    isPressed = false   // 标记鼠标松开状态

    // 重置坐标
    x = undefined
    y = undefined
})

/**
 * 鼠标移动事件监听器
 * 功能：在鼠标按下状态时进行绘图
 */
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        // 获取当前鼠标位置
        const x2 = e.offsetX
        const y2 = e.offsetY

        // 绘制圆点（画笔效果）
        drawCircle(x2, y2)
        
        // 绘制连接线（平滑线条）
        drawLine(x, y, x2, y2)

        // 更新坐标为当前位置
        x = x2
        y = y2
    }
})

/**
 * 绘制圆形函数
 * @param {number} x - 圆心X坐标
 * @param {number} y - 圆心Y坐标
 * 
 * 功能：在指定位置绘制一个圆形，模拟画笔笔触
 */
function drawCircle(x, y) {
    ctx.beginPath();                    // 开始新路径
    ctx.arc(x, y, size, 0, Math.PI * 2) // 绘制圆弧（完整圆形）
    ctx.fillStyle = color               // 设置填充颜色
    ctx.fill()                          // 填充圆形
}

/**
 * 绘制直线函数
 * @param {number} x1 - 起点X坐标
 * @param {number} y1 - 起点Y坐标
 * @param {number} x2 - 终点X坐标
 * @param {number} y2 - 终点Y坐标
 * 
 * 功能：连接两个点，创建平滑的线条效果
 */
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()         // 开始新路径
    ctx.moveTo(x1, y1)      // 移动到起点
    ctx.lineTo(x2, y2)      // 绘制到终点
    ctx.strokeStyle = color // 设置线条颜色
    ctx.lineWidth = size * 2 // 设置线条宽度（比圆形直径稍大）
    ctx.stroke()            // 绘制线条
}

/**
 * 更新画笔大小显示
 * 功能：将当前画笔大小显示在界面上
 */
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

/**
 * 增大画笔按钮事件监听器
 * 功能：增加画笔大小，最大限制为50
 */
increaseBtn.addEventListener('click', () => {
    size += 5   // 每次增加5

    if(size > 50) {
        size = 50   // 最大限制
    }

    updateSizeOnScreen()    // 更新显示
})

/**
 * 减小画笔按钮事件监听器
 * 功能：减少画笔大小，最小限制为5
 */
decreaseBtn.addEventListener('click', () => {
    size -= 5   // 每次减少5

    if(size < 5) {
        size = 5    // 最小限制
    }

    updateSizeOnScreen()    // 更新显示
})

/**
 * 颜色选择器事件监听器
 * 功能：更新当前绘图颜色
 */
colorEl.addEventListener('change', (e) => color = e.target.value)

/**
 * 清除画布按钮事件监听器
 * 功能：清除整个画布内容
 */
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))