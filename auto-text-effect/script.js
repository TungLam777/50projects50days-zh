// 自动文本效果 - JavaScript实现
// 功能：实现打字机效果，逐字显示文本内容，支持速度调节

// 获取DOM元素
const textEl = document.getElementById('text')    // 文本显示元素
const speedEl = document.getElementById('speed')  // 速度控制输入框

// 配置变量
const text = '我们热爱编程！'  // 要显示的文本内容
let idx = 1                   // 当前显示的字符索引
let speed = 300 / speedEl.value  // 打字速度（毫秒）

// 开始执行打字效果
writeText()

/**
 * 打字效果函数
 * 功能：
 * 1. 逐字显示文本内容
 * 2. 循环播放文本
 * 3. 根据速度设置控制显示间隔
 */
function writeText() {
    // 显示从开始到当前索引的文本片段
    textEl.innerText = text.slice(0, idx)

    // 移动到下一个字符
    idx++

    // 如果已显示完整文本，重新开始
    if(idx > text.length) {
        idx = 1  // 重置索引到第一个字符
    }

    // 根据设定的速度延迟后继续执行
    setTimeout(writeText, speed)
}

/**
 * 速度控制事件监听器
 * 功能：当用户调整速度滑块时，实时更新打字速度
 * 
 * 速度计算：300毫秒 / 速度值
 * - 速度值越大，间隔时间越短，打字越快
 * - 速度值越小，间隔时间越长，打字越慢
 */
speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})